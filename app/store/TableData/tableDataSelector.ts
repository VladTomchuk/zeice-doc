import { useSelector } from "react-redux";
import { RootState } from "../store";
import { createSelector } from "reselect";

export const useTableDataSelector = () => {
  const selectTableData = useSelector((state: RootState) => state.tableData);
  const selectTableDataSlice = () => selectTableData;

  const orderRows = createSelector(
    selectTableDataSlice,
    (order) => order.orderRows
  );
  const products = createSelector(
    selectTableDataSlice,
    (order) => order.products
  );

  const calculateImponible = createSelector(selectTableDataSlice, (order) =>
    order.orderRows.reduce((acc, row) => acc + row.importe, 0)
  );
  return {
    orderRows: orderRows(undefined),
    calculateImponible: calculateImponible(undefined),
    products: products(undefined),
  };
};
