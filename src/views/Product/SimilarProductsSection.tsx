import {
  Carousel,
  CarouselContent,
} from "@/components/UI/Carousel/Carousel/Carousel";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { getProductsByCategoryId } from "@/services/product";
import { unstable_cache } from 'next/cache';

interface SimilarProductsSectionProps {
  slug: string;
  categoryId: string;
}

export async function SimilarProductsSection({
                                               slug,
                                               categoryId,
                                             }: SimilarProductsSectionProps) {
  const items = await getSimilarProducts(slug, categoryId);

  return (
    <section className="py-40">
      <h2 className="mb-10 text-[26px] font-normal tracking-[-0.78px]">
        You might also like
      </h2>
      <Carousel opts={{ skipSnaps: true }}>
        <CarouselContent className="ml-0 justify-start gap-6">
          {items.map((product, idx) => (
            <ProductCard
              className="h-full min-w-[150px] max-w-[150px] md:min-w-[280px] md:max-w-[280px]"
              key={"featured_" + product.id + idx}
              {...product}
            />
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

const getSimilarProducts = unstable_cache(
  async (slug: string, categoryId: string) => {
    try {
      const products = await getProductsByCategoryId(categoryId);

      if (!products) {
        return [];
      }
      const similarProducts = products.filter(product => product.slug !== slug);

      return similarProducts.slice(0, 8);
    } catch (error) {
      console.error("Error while fetching similar products :", error);
      return [];
    }
  },
  ["similar-products"],
  { revalidate: 10 },
);
