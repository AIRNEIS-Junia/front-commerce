import MeiliSearch from "meilisearch";
import { MEILISEARCH_INDEX } from "@/constants";
import { getProducts } from "@/services/product";

const meilisearchClientSingleton = () => {
  return new MeiliSearch({
    host: process.env.MEILISEARCH_HOST || "",
    apiKey: process.env.MEILISEARCH_MASTER_KEY || "",
  });
};

declare global {
  var meilisearch: undefined | ReturnType<typeof meilisearchClientSingleton>;
}

const meilisearch = globalThis.meilisearch ?? meilisearchClientSingleton();

export { meilisearch };

export async function initMeiliSearch() {
  try {
    let index;
    try {
      index = await meilisearch.getIndex(MEILISEARCH_INDEX);
    } catch (error) {
      // @ts-ignore
      if (error.code === "index_not_found") {
        await meilisearch.createIndex(MEILISEARCH_INDEX);
        index = await meilisearch.getIndex(MEILISEARCH_INDEX);
      } else {
        throw error;
      }
    }

    const products = await getProducts();

    if (!products || !Array.isArray(products)) {
      throw new Error("No products found or invalid product data");
    }

    await index.updateDocuments(products, { primaryKey: "id" });

    const filterableAttributes = new Set([
      "category.slug",
      "price",
      "productTypes.name",
      "handle",
    ]);

    const sortableAttributes = new Set(["price", "updatedAt"]);
    const searchableAttributes = ["category.slug", "name", "description"];

    await index.updateSettings({
      filterableAttributes: Array.from(filterableAttributes),
      sortableAttributes: Array.from(sortableAttributes),
      searchableAttributes,
    });
  } catch (error) {
    console.error("Error initializing MeiliSearch:", error);
    throw error;
  }
}
