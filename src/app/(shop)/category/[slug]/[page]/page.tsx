import type { Metadata } from "next";
import { CategoryView } from "@/views/Category/CategoryView";

export const revalidate = 3600;
export const dynamic = "force-static";

interface CategoryPageProps {
  params: { slug: string; page: string };
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  return {
    title: `${params.slug} | Enterprise Commerce`,
    description: "In excepteur elit mollit in.",
  };
}

export default async function CategoryPage({ params, searchParams }: any) {
  return <CategoryView searchParams={searchParams} params={params} />;
}
