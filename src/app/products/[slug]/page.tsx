import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/UI/Breadcrumbs/Breadcrumbs";

import {
  getCombination,
  getOptionsFromUrl,
  hasValidOption,
  removeOptionsFromUrl,
} from "@/utils/productOptionsUtils";
import { BackButton } from "@/views/Product/BackButton";
import { DetailsSection } from "@/views/Product/DetailsSection";
import { GallerySection } from "@/views/Product/GallerySection";
import { InfoSection } from "@/views/Product/InfoSection";
import { PageSkeleton } from "@/views/Product/PageSkeleton";
import { slugToName } from "@/utils/slug-name";

import type { CommerceProduct } from "@/types";
import { getProductBySlug } from '@/services/product';
import { SimilarProductsSection } from '@/views/Product/SimilarProductsSection';

export const revalidate = 3600;

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
  const { color, size } = getOptionsFromUrl(slug);

  if (!product) {
    return notFound();
  }

  const categoryId = product.category?.id;

  return (
    <div className="max-w-container-md relative mx-auto px-4 xl:px-0">
      <div className="mb:pb-8 relative w-fit py-4 md:pt-12">
        <BackButton className="mb-8 hidden md:block" />
      </div>
      <main className="max-w-container-sm mx-auto">
        {/*<Breadcrumbs className="mb-8" items={makeBreadcrumbs(product)} />*/}

        <div className="grid grid-cols-1 justify-center gap-10 md:grid-cols-2 lg:gap-20">
          <GallerySection images={product.images}>
          </GallerySection>
          <div className="flex flex-col items-start pt-12">
            <InfoSection
              className="pb-6"
              price={product.price}
              quantity={product.quantity}
              title={product.name}
              slug={product.slug}
              description={product.description}
              material={product.material}
            />
            <DetailsSection slug={slug} product={product} />
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

function makeBreadcrumbs(product: CommerceProduct) {
  const lastCollection = product.collections?.findLast(Boolean);

  return {
    Home: "/",
    [lastCollection?.handle ? slugToName(lastCollection?.handle) : "Product"]:
      lastCollection?.handle ? `/category/${lastCollection.handle}` : "/search",
    [product.title]: "",
  };
}
