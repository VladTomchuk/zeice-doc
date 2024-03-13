import { Product } from "@/app/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface RowInputData {
  id: string;
  date: string;
  title: string;
  price: number;
  quantity: number;
  importe: number;
}

export const tableDataSlice = createSlice({
  name: "tableData",
  initialState: {
    orderRows: [] as RowInputData[],
    products: [] as Product[],
  },
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    addRowToOrder: (state, action: PayloadAction<RowInputData>) => {
      state.orderRows.push(action.payload);
    },
    removeOrderedProductRow: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      const filtred = state.orderRows.filter(
        (row) => row.id !== action.payload
      );
      state.orderRows = filtred;
    },
    updateDate: (
      state,
      action: PayloadAction<{ id: string; value: string }>
    ) => {
      state.orderRows = state.orderRows.map((row) =>
        action.payload.id === row.id
          ? { ...row, date: action.payload.value }
          : row
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ quantity: number; id: string }>
    ) => {
      state.orderRows = state.orderRows.map((row) =>
        action.payload.id === row.id
          ? { ...row, quantity: action.payload.quantity }
          : row
      );

      const orderRowToUpdate = state.orderRows.find(
        (row) => action.payload.id === row.id
      );

      if (orderRowToUpdate) {
        orderRowToUpdate.importe =
          action.payload.quantity * orderRowToUpdate.price;
        orderRowToUpdate.quantity = action.payload.quantity;
      }
    },
    setSelectedProduct: (
      state,
      action: PayloadAction<{ id: string; price: number; title: string }>
    ) => {
      state.orderRows = state.orderRows.map((row) =>
        action.payload.id === row.id
          ? { ...row, price: action.payload.price, title: action.payload.title }
          : row
      );
      const orderRowToUpdate = state.orderRows.find(
        (row) => action.payload.id === row.id
      );
      if (orderRowToUpdate) {
        orderRowToUpdate.importe =
          orderRowToUpdate.quantity * orderRowToUpdate.price;
      }
    },
    resetAll: (state, action) => {
      state.orderRows = [];
    },
  },
});

export const {
  setProducts,
  addRowToOrder,
  removeOrderedProductRow,
  updateDate,
  updateQuantity,
  setSelectedProduct,
  resetAll,
} = tableDataSlice.actions;

export default tableDataSlice.reducer;
