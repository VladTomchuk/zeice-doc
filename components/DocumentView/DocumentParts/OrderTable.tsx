import { Table, TableContainer, Tbody, Text, Thead } from "@chakra-ui/react";

import { ProductTableRow } from "../ProductTableRow";
import { useTableDataSelector } from "@/app/store/TableData/tableDataSelector";
import TableHeader from "@/components/GeneratorView/TableHeader";

export const OrderTable = () => {
  const { orderRows } = useTableDataSelector();
  return (
    <TableContainer w="185mm" mb="15px">
      <Text fontSize="12px" textAlign="center" mb="5px" fontWeight={700}>
        CONCEPTO:
      </Text>
      <Table variant="unstyled" border="1px">
        <Thead>
          <TableHeader />
        </Thead>

        <Tbody>
          {orderRows.map((rowData, index) => (
            <ProductTableRow key={index} rowData={rowData} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
