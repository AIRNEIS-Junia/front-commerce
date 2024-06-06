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
    <button className={"btn btn-dark"} type="button" onClick={handleAddToCart}>
      Ajouter au panier
    </button>
  );
};

export default AddToCartButton;
