import { useSelector } from "react-redux";
import { RootState } from "../store";
import { createSelector } from "reselect";

export const useClientDataSelector = () => {
  const selectClientData = useSelector((state: RootState) => state.clientData);
  const selectClientDataSlice = () => selectClientData;

  const clients = createSelector(
    selectClientDataSlice,
    (order) => order.clients
  );

  const selectedClient = createSelector(
    selectClientDataSlice,
    (order) => order.selectedClient
  );
  const individualPrice = createSelector(
    selectClientDataSlice,
    (order) => order.individualClientPrice
  );

  return {
    clients: clients(undefined),
    selectedClient: selectedClient(undefined),
    individualPrice: individualPrice(undefined),
  };
};
