import { Client, IndividualClientPrice } from "@/app/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const clientDataSlice = createSlice({
  name: "clientData",
  initialState: {
    clients: [] as Client[],
    selectedClient: null as Client | null,
    individualClientPrice: [] as IndividualClientPrice[],
  },
  reducers: {
    setClients: (state, action: PayloadAction<Client[]>) => {
      state.clients = action.payload;
    },
    selectClient: (state, action: PayloadAction<string>) => {
      const clientId = action.payload;
      state.selectedClient =
        state.clients.find((client) => String(client.id) === clientId) || null;
    },
    setIndividualClientPrice: (
      state,
      action: PayloadAction<IndividualClientPrice[]>
    ) => {
      state.individualClientPrice = action.payload;
    },
  },
});

export const { setClients, selectClient, setIndividualClientPrice } =
  clientDataSlice.actions;

export default clientDataSlice.reducer;
