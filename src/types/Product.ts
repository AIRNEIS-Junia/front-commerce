import { Category } from "@/types/Category";
import { ProductType } from "@/types/ProductType";

export interface Product {
  id: string;
  name: string;
  description: string;
  images: string[];
  price: number;
  quantity: number;
  productTypes: ProductType[];
  categoryId: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
  category: Category;
}
