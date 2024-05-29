"use client";

import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/lib/features/cart/cart.slice";

interface AddToCartButtonProps {
  productId: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ productId }) => {
  console.log("productId", productId);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ id: productId, quantity: 1 }));
  };

  // @ts-ignore
  const cartItems = useSelector((state) => state.cart.items);

  console.log("Cart items:", cartItems);

  return (
    <button type="button" onClick={handleAddToCart}>
      Add to cart
    </button>
  );
};

export default AddToCartButton;
