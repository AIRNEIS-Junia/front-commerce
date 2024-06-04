import { notFound } from "next/navigation";
import { HeroSection } from "@/views/Category/HeroSection";
import { SearchView } from "@/views/Search/SearchView";
import { getCategoryBySlug } from "@/services/category";

interface CategoryViewProps {
  params: { slug: string; page?: string };
  searchParams?: any;
}

export async function CategoryView({
  params,
  searchParams = {},
}: CategoryViewProps) {
  const collection = await getCategoryBySlug(params.slug);

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
