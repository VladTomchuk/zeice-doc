import { configureStore } from "@reduxjs/toolkit";
import tableDataSlice from "./TableData/tableDataSlice";
import { clientDataSlice } from "./ClientData/clientDataSlice";

export const store = configureStore({
  reducer: { tableData: tableDataSlice, clientData: clientDataSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
