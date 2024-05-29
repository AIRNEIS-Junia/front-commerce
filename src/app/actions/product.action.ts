"use server";

import { unstable_cache } from "next/cache";
import { meilisearch } from "@/clients/meilisearch";
import { MEILISEARCH_INDEX } from "@/constants/index";
import { ComparisonOperators, FilterBuilder } from "@/utils/filterBuilder";

export const searchProducts = unstable_cache(
  async (query: string, limit: number = 4) => {
    const index = await meilisearch?.getIndex<any>(MEILISEARCH_INDEX);

    if (!index) return { hits: [], hasMore: false };

    const res = await index?.search(query, {
      limit,
      attributesToRetrieve: [
        "id",
        "handle",
        "title",
        "featuredImage",
        "images",
        "variants",
      ],
    });

    return { hits: res.hits, hasMore: res.estimatedTotalHits > limit };
  },
  ["autocomplete-search"],
  { revalidate: 3600 },
);

export const getProduct = unstable_cache(
  async (handle: string) => {
    const index = await meilisearch?.getIndex<any>(MEILISEARCH_INDEX);
    const documents = await index?.getDocuments({
      filter: new FilterBuilder()
        .where("handle", ComparisonOperators.Equal, handle)
        .build(),
      limit: 1,
    });
    return documents.results.find(Boolean) || null;
  },
  ["product-by-handle"],
  { revalidate: 3600 },
);