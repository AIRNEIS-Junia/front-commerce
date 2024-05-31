// src/store/cart.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  items:
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("cart") || "[]"),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<any>) => {
      const existingItem = state.items.find(
        (item: { slug: any }) => item.slug === action.payload.slug,
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      typeof window !== "undefined" &&
        localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item: { slug: string }) => item.slug !== action.payload,
      );

      typeof window !== "undefined" &&
        localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
