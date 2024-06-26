"use client";

import { useWindowSize } from "@uidotdev/usehooks";
import { Skeleton } from "@/components/UI/Skeleton/Skeleton";
import dynamic from "next/dynamic";
import { cn } from "@/utils/cn";

const FacetsContent = dynamic(
  () => import("@/views/Listing/FacetsContent").then((m) => m.FacetsContent),
  { loading: FacetsContentSkeleton },
);

export function FacetsDesktop({
  facetDistribution,
  className,
  disabledFacets,
}: any) {
  const { width = 0 } = useWindowSize();
  const isMobile = width! < 1024 && !!width;

  return isMobile ? null : (
    <FacetsContent
      facetDistribution={facetDistribution}
      className={cn(className, "sticky overflow-auto")}
      disabledFacets={disabledFacets}
    />
  );
}

function FacetsContentSkeleton() {
  return (
    <div className="my-16 hidden flex-col gap-0 md:flex">
      <Skeleton className="mb-[50px] mt-[72px] h-[394px] min-w-[250px] md:block" />
      <Skeleton className="mb-6 flex h-[35px] min-w-[250px] md:block" />
      <Skeleton className="flex h-[400px] min-w-[250px] md:block" />
    </div>
  );
}
