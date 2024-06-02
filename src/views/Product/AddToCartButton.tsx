"use client";

import { useDispatch } from "react-redux";
import { addItem } from "@/lib/features/cart/cart.slice";

interface AddToCartButtonProps {
  productSlug: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ productSlug }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ slug: productSlug, quantity: 1 }));
  };

  return (
    <button type="button" onClick={handleAddToCart}>
      Add to cart
    </button>
  );
};

export default AddToCartButton;
