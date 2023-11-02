import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: '',
  isOpen: false
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.type = action.payload;
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.type = '';
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
