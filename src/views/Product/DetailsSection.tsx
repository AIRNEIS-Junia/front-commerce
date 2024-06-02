"use client";

import { useIntersectionObserver } from "@uidotdev/usehooks";
import dynamic from "next/dynamic";
import {
  getCombination,
  getOptionsFromUrl,
} from "src/utils/productOptionsUtils";
import {
  AddToCartButtonSkeleton,
  FaqSectionSkeleton,
} from "src/views/Product/PageSkeleton";
import { useRef } from "react";
import type { CommerceProduct } from "src/types";

const AddToCartButton = dynamic(
  () =>
    import("src/views/Product/AddToCartButton").then(
      (module) => module.AddToCartButton,
    ),
  { loading: AddToCartButtonSkeleton },
);
const FaqSection = dynamic(
  () =>
    import("src/views/Product/FaqSection").then((module) => module.FaqSection),
  { loading: FaqSectionSkeleton },
);

export function DetailsSection({
  product,
  slug,
}: {
  product: CommerceProduct;
  slug: string;
}) {
  const hasLoaded = useRef(false);
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  const { color, size } = getOptionsFromUrl(slug);
  const combination = getCombination(product, color, size);

  if (!hasLoaded.current && entry?.isIntersecting) {
    hasLoaded.current = true;
  }

  return (
    <div ref={ref} className="w-full">
      {hasLoaded.current && (
        <>
          <AddToCartButton
            className="my-8"
            combination={combination}
            product={product}
            slug={slug}
          />
          <FaqSection className="mt-12" />
        </>
      )}
    </div>
  );
}
