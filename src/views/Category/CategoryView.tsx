import { notFound } from "next/navigation";
import { SearchParamsType } from "@/types";
import { HeroSection } from "@/views/Category/HeroSection";
import { SearchView } from "@/views/Search/SearchView";
import { getCategoryByName } from "@/services/category";

interface CategoryViewProps {
  params: { slug: string; page?: string };
  searchParams?: SearchParamsType;
}

export async function CategoryView({
  params,
  searchParams = {},
}: CategoryViewProps) {
  const collection = await getCategoryByName(params.slug);

  if (!collection) return notFound();

  return (
    <SearchView
      searchParams={searchParams}
      params={params}
      disabledFacets={["category", "tags"]}
      collection={collection}
      intro={
        <HeroSection
          handle={collection.name}
          title={collection.name}
          description={collection.description}
          image={collection.image}
        />
      }
    />
  );
}
