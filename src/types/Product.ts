import { Category } from "@/types/Category";

export interface Product {
  id: string;
  name: string;
  description: string;
  images: string[];
  price: number;
  quantity: number;
  material: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
  category: Category;
}
