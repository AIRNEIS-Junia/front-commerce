import { Suspense } from "react";
import { unstable_cache } from "next/cache";
import {
  createSearchParamsCache,
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
} from "nuqs/server";
import { initMeiliSearch, meilisearch } from "@/clients/meilisearch";
import { ComparisonOperators, FilterBuilder } from "@/utils/filterBuilder";
import { composeFilters } from "@/views/Listing/composeFilters";
import { FacetsDesktop } from "@/views/Listing/FacetsDesktop";
import { FacetsMobile } from "@/views/Listing/FacetsMobile";
import { HitsSection } from "@/views/Listing/HitsSection";
import { PaginationSection } from "@/views/Listing/PaginationSection";
import { SearchFacet } from "@/views/Listing/SearchFacet";
import { Sorter } from "@/views/Listing/Sorter";
import { Product } from "@/types/Product";

export const searchParamsCache = createSearchParamsCache({
  q: parseAsString.withDefault(""),
  page: parseAsInteger.withDefault(1),
  minPrice: parseAsInteger,
  maxPrice: parseAsInteger,
  sortBy: parseAsString.withDefault(""),
  categories: parseAsArrayOf(parseAsString).withDefault([]),
  productTypes: parseAsArrayOf(parseAsString).withDefault([]),
});

export async function SearchView({
  searchParams,
  disabledFacets,
  intro,
  collection,
}: any) {
  const { q, sortBy, page, ...rest } = searchParamsCache.parse(searchParams);

  const filterBuilder = new FilterBuilder();
  if (collection) {
    filterBuilder.where(
      "category.slug",
      ComparisonOperators.Equal,
      collection.slug,
    );
  }

  const filters = composeFilters(filterBuilder, rest);

  const { facetDistribution, hits, totalPages } = await searchProducts(
    q,
    sortBy,
    page,
    filters.build(),
  );

  return (
    <div className="max-w-container-md mx-auto w-full px-4 py-12 md:py-24 xl:px-0">
      {intro}
      <div className="flex min-h-screen w-full flex-col gap-12 md:flex-row md:gap-24">
        <FacetsDesktop
          disabledFacets={disabledFacets}
          className="hidden min-w-[250px] max-w-[250px] md:mt-16 lg:block"
          facetDistribution={facetDistribution}
        />
        <div className="flex w-full flex-col">
          <div className="mb-6 flex w-full flex-wrap items-center justify-between">
            <div className="flex w-full gap-2 pb-8">
              <div className="flex items-center justify-between gap-4">
                <FacetsMobile
                  disabledFacets={disabledFacets}
                  facetDistribution={facetDistribution}
                  className="block lg:hidden"
                />
              </div>
              <Suspense>
                <SearchFacet className="grow" />
              </Suspense>
              <Suspense>
                <Sorter className="ml-auto hidden shrink-0 basis-[200px] self-center lg:block" />
              </Suspense>
            </div>
            <HitsSection hits={hits} />
            <PaginationSection
              queryParams={searchParams}
              totalPages={totalPages}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const searchProductsWrapper = async (
  query: string,
  sortBy: string,
  page: number,
  filter: string,
) => {
  try {
    await initMeiliSearch();
    const index = await meilisearch.getIndex<Product>("products");

    const results = await index.search(query, {
      sort: sortBy ? [sortBy] : undefined,
      hitsPerPage: 9,
      facets: ["category.slug", "productTypes.name", "price"],
      filter,
      page,
      attributesToRetrieve: [
        "id",
        "name",
        "price",
        "images",
        "category",
        "productTypes",
        "updatedAt",
        "slug",
      ],
    });

    const hits = results?.hits || [];

    const totalPages = results?.totalPages || 0;
    const facetDistribution = results?.facetDistribution || {};

    return { hits, totalPages, facetDistribution };
  } catch (error) {
    console.error("Error searching products:", error);
    throw error;
  }
};

const searchProducts = unstable_cache(
  searchProductsWrapper,
  ["products-search"],
  // Revalidate every 10 seconds
  { revalidate: 10 },
);
