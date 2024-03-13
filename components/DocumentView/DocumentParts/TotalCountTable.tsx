import { useTableDataSelector } from "@/app/store/TableData/tableDataSelector";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
} from "@chakra-ui/react";

export const TotalCountTable = () => {
  const { orderRows } = useTableDataSelector();
  const calculateImponible = orderRows.reduce(
    (total, r) => total + r.importe,
    0
  );
  const iva = parseFloat((calculateImponible * 0.1).toFixed(1));
  const importeTotal = calculateImponible + iva;
  return (
    <TableContainer w="185mm" mb="15px">
      <Table variant="unstyled" border="1px">
        <Thead>
          <Tr w="100%" bg="lightgrey">
            <Th textAlign="center" border="1px" p={1}>
              <Text m={0} fontSize="11px" textTransform="none">
                Base imponible, euro
              </Text>
            </Th>
            <Th textAlign="center" border="1px" p={1}>
              <Text m={0} fontSize="11px" textTransform="none">
                IVA 10%, euro
              </Text>
            </Th>
            <Th textAlign="center" border="1px" p={1}>
              <Text m={0} fontSize="11px" textTransform="none">
                Total, euro
              </Text>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td textAlign="center" border="1px" p={1}>
              <Text m={0} fontStyle="italic" fontSize="11px">
                {calculateImponible}
              </Text>
            </Td>
            <Td textAlign="center" border="1px" p={1}>
              <Text m={0} fontStyle="italic" fontSize="11px">
                {iva}
              </Text>
            </Td>
            <Td textAlign="center" border="1px" p={1}>
              <Text m={0} fontStyle="italic" fontSize="11px">
                {importeTotal}
              </Text>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
