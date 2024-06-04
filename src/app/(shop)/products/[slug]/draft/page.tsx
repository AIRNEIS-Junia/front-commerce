import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/UI/Breadcrumbs/Breadcrumbs";

import { BackButton } from "@/views/Product/BackButton";
import { GallerySection } from "@/views/Product/GallerySection";
import { InfoSection } from "@/views/Product/InfoSection";
import { PageSkeleton } from "@/views/Product/PageSkeleton";
import { slugToName } from "@/utils/slug-name";
import { removeOptionsFromUrl } from "@/utils/productOptionsUtils";
import { getProductBySlug } from "@/services/product";

export const dynamic = "force-static";

export const revalidate = 1;

export const dynamicParams = true;

interface ProductProps {
  params: { slug: string };
}

export default async function Product({ params: { slug } }: ProductProps) {
  console.log("Product Component - slug:", slug);
  return (
    <Suspense fallback={<PageSkeleton />}>
      <ProductView slug={slug} />
    </Suspense>
  );
}

export async function generateStaticParams() {
  return [];
}

async function ProductView({ slug }: { slug: string }) {
  console.log("ProductView - slug:", slug);
  const product = await getDraftAwareProduct(slug);

  if (!product) {
    console.log("Product not found for slug:", slug);
    return notFound();
  }

  return (
    <div className="max-w-container-md relative mx-auto px-4 xl:px-0">
      <div className="mb:pb-8 relative w-fit py-4 md:pt-12">
        <BackButton className="mb-8 hidden md:block" />
      </div>
      <main className="max-w-container-sm mx-auto">
        <Breadcrumbs
          className="mb-8 hidden md:block"
          items={makeBreadcrumbs(product)}
        />
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
    </div>
  );
}

async function getDraftAwareProduct(slug: string) {
  const handle = removeOptionsFromUrl(slug);
  console.log("getDraftAwareProduct - handle:", handle);

  let product = await getProductBySlug(slug);

  console.log("getDraftAwareProduct - product:", product);
  return product;
}

function makeBreadcrumbs(product: any) {
  const lastCollection = product.collections?.findLast(Boolean);
  const lastCollectionHandle = lastCollection?.handle
    ? slugToName(lastCollection.handle)
    : "Product";

  return {
    Home: "/",
    [lastCollectionHandle]: lastCollection?.handle
      ? `/category/${lastCollection.handle}`
      : "/search",
    [product.title]: "",
  };
}
