import {
  Button,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Thead,
  Tr,
  Box,
} from "@chakra-ui/react";
import { Fragment, memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { v1 } from "uuid";
import ProductTableRow from "./ProductTableRow";
import TableHeader from "./TableHeader";
import { useTablePreview } from "./useTablePreview";
import { useTableDataSelector } from "@/app/store/TableData/tableDataSelector";
import { Client } from "@/app/types";
import { useClientDataSelector } from "@/app/store/ClientData/clientDataSelector";
import { selectClient } from "@/app/store/ClientData/clientDataSlice";
import {
  addRowToOrder,
  removeOrderedProductRow,
  updateDate,
  updateQuantity,
  setSelectedProduct,
  resetAll,
} from "@/app/store/TableData/tableDataSlice";

const PreviewContainer = () => {
  const { orderRows } = useTableDataSelector();
  const { clients, selectedClient } = useClientDataSelector();
  const dispatch = useDispatch();
  const { currentDate } = useTablePreview();

  const addRowHandler = () => {
    const newDate = currentDate();
    const newRowData = {
      id: v1(),
      date: newDate,
      title: "",
      price: 0,
      quantity: 0,
      importe: 0,
    };

    dispatch(addRowToOrder(newRowData));
  };

  const removeRowCallback = useCallback(
    (id: string) => {
      dispatch(removeOrderedProductRow(id));
    },
    [dispatch]
  );

  const updateDateCallback = useCallback(
    (id: string, value: string) => {
      dispatch(updateDate({ id, value }));
    },
    [dispatch]
  );

  const updateQuantityCallbak = useCallback(
    (quantity: number, id: string) => {
      dispatch(updateQuantity({ quantity, id }));
    },
    [dispatch]
  );

  const setProductCallback = useCallback(
    (id: string, price: number, title: string) => {
      dispatch(setSelectedProduct({ id, price, title }));
    },
    [dispatch]
  );

  const calculateImponible = orderRows.reduce(
    (total, r) => total + r.importe,
    0
  );
  const iva = parseFloat((calculateImponible * 0.1).toFixed(1));
  const importeTotal = calculateImponible + iva;

  const selectClientHandler = (e: any) => {
    dispatch(selectClient(e.target.value));
    dispatch(resetAll({}));
  };

  return (
    <Fragment>
      <Box my={5}>
        <Select onChange={selectClientHandler}>
          <option>{selectedClient?.bar_title}</option>
          {clients.map((option: Client, index) => {
            return (
              <option key={index} value={option.id}>
                {option.bar_title}
              </option>
            );
          })}
        </Select>
      </Box>

      <TableContainer w="220mm">
        <Table variant="unstyled">
          <Thead>
            <TableHeader />
          </Thead>

          <Tbody>
            {orderRows.map((r, index) => (
              <ProductTableRow
                setProductCallback={setProductCallback}
                updateDateHandler={updateDateCallback}
                removeRowCallback={removeRowCallback}
                updateQuantityCallbak={updateQuantityCallbak}
                rowData={r}
                key={index}
              />
            ))}

            <Tr w="100%" bg="lightgrey">
              <Td rowSpan={2} textAlign="center" py={0} px={1}>
                <Text fontSize="11px" fontWeight={800} textTransform="none">
                  Base imponible, euro
                </Text>
                <Text>{calculateImponible}</Text>
              </Td>
              <Td></Td>
              <Td rowSpan={4} textAlign="center" py={0} px={1}>
                <Text fontSize="11px" fontWeight={800} textTransform="none">
                  IVA 10%, euro
                </Text>
                <Text>{iva}</Text>
              </Td>
              <Td></Td>
              <Td textAlign="center" py={0} px={1}>
                <Text fontSize="11px" fontWeight={800} textTransform="none">
                  Total, euro
                </Text>
                <Text>{importeTotal}</Text>
              </Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Button size="sm" onClick={addRowHandler} my="10px">
              add row
            </Button>
          </Tfoot>
        </Table>
      </TableContainer>
    </Fragment>
  );
};
export default memo(PreviewContainer);
