import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedAddress: null,
  showForm: false,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    selectAddress: (state, action) => {
      state.selectedAddress = action.payload;
      state.showForm = false;
    },
    showForm: (state) => {
      state.showForm = true;
    },
    hideForm: (state) => {
      state.showForm = false;
    },
  },
});

export const { selectAddress, showForm, hideForm } = addressSlice.actions;
export default addressSlice.reducer;
