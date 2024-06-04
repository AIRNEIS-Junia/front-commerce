"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import OrderSummaryDetailsItem from "@/components/Checkout/OrderSummaryDetailsItem";
import { getProductBySlug } from "@/services/product";
import { Product } from "@/types/Product";

const OrderSummaryDetails = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  const [products, setProducts] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setError(null);
        const productPromises = cartItems.map((item: { slug: string }) =>
          getProductBySlug(item.slug),
        );
        const products = await Promise.all(productPromises);

        // Remove duplicates by using a Map with the product ID as the key
        const uniqueProducts = Array.from(
          new Map(products.map((product) => [product.id, product])).values(),
        );

        setProducts(uniqueProducts);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
      }
    };

    fetchProducts();
  }, [cartItems]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col space-y-14">
      {products.map((item) => (
        <OrderSummaryDetailsItem key={item.slug} product={item} />
      ))}
    </div>
  );
};

export default OrderSummaryDetails;
