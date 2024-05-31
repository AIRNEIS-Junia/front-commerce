import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cart.slice";
import addressSlice from "@/lib/features/cart/address.slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      address: addressSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
