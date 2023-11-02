import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getData } from '../../utils/api';

const baseUrl = "https://norma.nomoreparties.space/api";

export const fetchIngredients = createAsyncThunk(
  "ingredients/get", getData
);

const burgerIngredientsSlice = createSlice({
  name: 'ingredients',
  initialState: {
    ingredientsArray: [],
    isLoading: false,
    error: '',
    currentIngredient: {}
  },
  reducers: {
    addIngredientDetails: (state, action) => {
      state.currentIngredient = action.payload;
    },
    deleteIngredientDetails: (state) => {
      state.currentIngredient= {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        console.log(action.payload);
        state.ingredientsArray = action.payload;
        state.isLoading = false;
        state.error = '';
      })
      .addCase(fetchIngredients.pending, (state) => {
        state.ingredientsArray = [];
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.ingredientsArray = [];
        state.isLoading = false;
        state.error = action.error;
        console.log(action.error);
      });
  },
})

export const ingredientsReducer = burgerIngredientsSlice.reducer

export const { addIngredientDetails, deleteIngredientDetails } = burgerIngredientsSlice.actions



