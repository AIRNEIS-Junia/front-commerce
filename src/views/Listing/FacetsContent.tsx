import { Suspense } from "react";
import type { CategoriesDistribution } from "meilisearch";
import {
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  useQueryState,
} from "nuqs";

import { useFilterTransitionStore } from "@/stores/filterTransitionStoreStore";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/UI/Accordion/Accordion";
import { SearchIcon } from "@/components/UI/Icons/SearchIcon";

import { Facet } from "./Facet";
import { CategoryFacet } from "./CategoryFacet";
import { PriceFacet } from "./PriceFacet";
import { Sorter } from "./Sorter";

interface FacetsContentProps {
  facetDistribution: Record<string, CategoriesDistribution> | undefined;
  className?: string;
  disabledFacets?: string[];
}

export function FacetsContent({
  facetDistribution,
  className,
  disabledFacets,
}: FacetsContentProps) {
  const collections = facetDistribution?.["category.slug"];
  const productTypes = facetDistribution?.["productTypes.name"];

  const { set: setLastSelected, selected: lastSelected } =
    useFilterTransitionStore((s) => s);

  const [selectedCategories, setSelectedCategories] = useQueryState(
    "categories",
    {
      ...parseAsArrayOf(parseAsString),
      defaultValue: [],
      shallow: false,
      history: "push",
      clearOnDefault: true,
    },
  );

  const [selectedProductTypes, setSelectedProductTypes] = useQueryState(
    "productTypes",
    {
      ...parseAsArrayOf(parseAsString),
      defaultValue: [],
      shallow: false,
      history: "push",
      clearOnDefault: true,
    },
  );

  const [_, setPage] = useQueryState("page", {
    ...parseAsInteger,
    defaultValue: 1,
    shallow: false,
    history: "push",
    clearOnDefault: true,
  });

  const [minPrice, setMinPrice] = useQueryState("minPrice", {
    ...parseAsInteger,
    shallow: false,
    defaultValue: 0,
    clearOnDefault: true,
  });

  const [maxPrice, setMaxPrice] = useQueryState("maxPrice", {
    ...parseAsInteger,
    shallow: false,
    defaultValue: 0,
    clearOnDefault: true,
  });

  const filtersCount = [
    selectedCategories,
    selectedProductTypes,
    minPrice,
    maxPrice,
  ].filter((v) => (Array.isArray(v) ? v.length !== 0 : !!v)).length;

  function resetAllFilters() {
    setSelectedCategories(null);
    setSelectedProductTypes(null);
    setMinPrice(null);
    setMaxPrice(null);
  }

  return (
    <div className={className}>
      <Suspense>
        <Sorter className="shrink-0 basis-[200px] self-center lg:hidden" />
      </Suspense>
      {!disabledFacets?.includes("category") ? (
        <CategoryFacet
          title="categories"
          distribution={collections}
          isChecked={(category) => selectedCategories.includes(category)}
          onCheckedChange={(checked, category) => {
            setSelectedCategories((prev) =>
              checked
                ? [...prev, category]
                : prev.filter((cat) => cat !== category),
            );
            setPage(1);
          }}
        />
      ) : null}
      <div className={"relative mb-6 block overflow-hidden rounded-md"}>
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
          <SearchIcon className="size-4 text-neutral-500" />
        </div>
      </div>

      <Accordion
        collapsible
        className="w-full"
        type="single"
        defaultValue={lastSelected}
      >
        {!disabledFacets?.includes("productTypes") ? (
          <Facet
            id="productTypes"
            title="Materials"
            distribution={productTypes}
            isChecked={(productType) =>
              selectedProductTypes.includes(productType)
            }
            onCheckedChange={(checked, productType) => {
              setSelectedProductTypes((prev) =>
                checked
                  ? [...prev, productType]
                  : prev.filter((pt) => pt !== productType),
              );
              setLastSelected("productTypes");
              setPage(1);
            }}
          />
        ) : null}

        <AccordionItem value="price">
          <AccordionTrigger className="text-base">Price Range</AccordionTrigger>
          <AccordionContent>
            <PriceFacet
              initMin={minPrice}
              initMax={maxPrice}
              setFacet={({ minPrice, maxPrice }) => {
                setMinPrice(minPrice);
                setMaxPrice(maxPrice);
                setPage(1);
                setLastSelected("price");
              }}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {!!filtersCount ? (
        <div
          className="mt-10 inline-flex cursor-pointer text-[15px] text-black underline"
          onClick={() => resetAllFilters()}
        >
          Reset all filters {filtersCount}
        </div>
      ) : null}
    </div>
  );
}
