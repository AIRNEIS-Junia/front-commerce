import { notFound } from "next/navigation";
import { Suspense } from "react";
import {
  getOptionsFromUrl,
  removeOptionsFromUrl,
} from "@/utils/productOptionsUtils";
import { BackButton } from "@/views/Product/BackButton";
import { GallerySection } from "@/views/Product/GallerySection";
import { InfoSection } from "@/views/Product/InfoSection";
import { PageSkeleton } from "@/views/Product/PageSkeleton";
import { getProductBySlug } from "@/services/product";
import { SimilarProductsSection } from "@/views/Product/SimilarProductsSection";
import { getCategoryById } from "@/services/category";

export const dynamic = "force-static";
export const dynamicParams = true;

interface ProductProps {
  params: { slug: string };
}

export default async function Product({ params: { slug } }: ProductProps) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <ProductView slug={slug} />
    </Suspense>
  );
}

async function ProductView({ slug }: { slug: string }) {
  const product = await getProductBySlug(removeOptionsFromUrl(slug));

  if (!product) {
    return notFound();
  }

  const breadcrumbs = await makeBreadcrumbs(product);

  return (
    <div className="max-w-container-md relative mx-auto px-4 xl:px-0">
      <div className="mb:pb-8 relative w-fit py-4 md:pt-12">
        <BackButton className="mb-8 hidden md:block" />
      </div>
      <main className="max-w-container-sm mx-auto">
        <div className="grid grid-cols-1 justify-center gap-10 md:grid-cols-2 lg:gap-20">
          <GallerySection images={product.images} />
          <div className="flex flex-col items-start pt-12">
            <InfoSection
              className="pb-6"
              price={product.price}
              quantity={product.quantity}
              title={product.name}
              slug={product.slug}
              description={product.description}
              productTypes={product.productTypes}
            />
          </div>
        </div>
      </main>
      <SimilarProductsSection
        categoryId={product.categoryId}
        slug={product.slug}
      />
    </div>
  );
}

async function makeBreadcrumbs(product: any) {
  const categoryId = product.categoryId;
  let categoryName = "";

  if (categoryId) {
    const category = await getCategoryById(categoryId);
    if (category) {
      categoryName = category.name;
    }
  }

  return [
    { label: "Home", path: "/" },
    { label: categoryName, path: `/category/${categoryName}` },
    { label: product.name, path: `/products/${product.slug}` },
  ];
}
