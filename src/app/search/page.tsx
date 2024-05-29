import { Suspense } from "react";
import { PageSkeleton } from "@/views/Category/PageSkeleton";
import { SearchView } from "@/views/Search/SearchView";

// @ts-ignore
export default async function SearchPage({ searchParams }) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <SearchView searchParams={searchParams} />
    </Suspense>
  );
}
