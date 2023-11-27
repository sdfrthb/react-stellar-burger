import { constructorReducer } from './slices/constructorSlice';
import { ingredientsReducer } from './slices/burgerIngredientsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { orderReducer } from './slices/orderSlice';
import { modalReducer } from './slices/modalSlice';

export const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    burgerConstructor: constructorReducer,
    order: orderReducer,
    modal: modalReducer
  },
});
