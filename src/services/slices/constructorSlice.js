import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bun: null,
  fillings: [],
};

const constructorSlice = createSlice({
  name: "burgerConstructor",
  initialState,
  reducers: {
    addIngredient: (state, action) => {
      if (action.payload.type === "bun") {
        state.bun = action.payload;
      } else {
        state.fillings.push(action.payload);
      }
    },
    deleteIngredient: (state, action) => {
      console.log(action.payload);
      state.fillings = state.fillings.filter(
        (item) => item._customId !== action.payload._customId
      );
    },
    replaceIngredient: (state, action) => {
      const { indexFrom, indexTo, ingredient } = action.payload;
      state.fillings.splice(indexFrom, 1);
      state.fillings.splice(indexTo, 0, ingredient);
    },
    deleteAllIngredients: (state) => {
      state.fillings = [];
      state.bun = null;
    },
  },
});

export const {
  addIngredient,
  deleteIngredient,
  replaceIngredient,
  deleteAllIngredients,
} = constructorSlice.actions;
export const constructorReducer = constructorSlice.reducer;
