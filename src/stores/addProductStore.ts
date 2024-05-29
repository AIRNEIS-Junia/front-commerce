import { create } from "zustand";
import type { Product } from "@/types/Product";

interface AddProductStore {
  product: Product | null;
  setProduct: (product: Product) => void;
  clean: () => void;
}

export const useAddProductStore = create<AddProductStore>((set) => ({
  product: null,
  setProduct: (product) => set(() => ({ product })),
  clean: () => set(() => ({ product: null })),
}));
