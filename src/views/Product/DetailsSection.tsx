"use client";

import { useIntersectionObserver } from "@uidotdev/usehooks";
import dynamic from "next/dynamic";
import {
  AddToCartButtonSkeleton,
  FaqSectionSkeleton,
} from "@/views/Product/PageSkeleton";
import { useRef } from "react";
import type { CommerceProduct } from "@/types";

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


  if (!hasLoaded.current && entry?.isIntersecting) {
    hasLoaded.current = true;
  }

  return (
    <div ref={ref} className="w-full">
      {hasLoaded.current && (
        <>
          {/*<AddToCartButton*/}
          {/*  className="my-8"*/}
          {/*  combination={combination}*/}
          {/*  product={product}*/}
          {/*  slug={slug}*/}
          {/*/>*/}
          {/*<FaqSection className="mt-12" />*/}
        </>
      )}
    </div>
  );
}
