import {
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { postOrder } from '../../utils/api';

const initialState = {
  order: {},
  isLoading: false,
};

export const createNewOrder = createAsyncThunk(
  'order/newOrder', postOrder
);

const orderSlice = createSlice({
  name: 'order',
  initialState,
  extraReducers(builder) {
    builder
    .addCase(createNewOrder.fulfilled, (state, action) => {
      state.order = action.payload.order;
      state.isLoading = false;
    })
    .addCase(createNewOrder.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(createNewOrder.rejected, (state, action) => {
      state.isLoading = false;
      console.error(action.error);
    });
  },
});


export const orderReducer = orderSlice.reducer;
