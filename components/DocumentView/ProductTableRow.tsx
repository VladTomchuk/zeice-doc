import { RowInputData } from "@/app/store/TableData/tableDataSlice";
import { Tr, Td, Text } from "@chakra-ui/react";

interface ProductTableRowProps {
  rowData: RowInputData;
  key: any;
}

export const ProductTableRow = ({ rowData, key }: ProductTableRowProps) => {
  return (
    <Tr fontStyle="italic">
      <Td textAlign="center" border="1px" p={1}>
        <Text fontSize="12px" m={0}>
          {rowData.date}
        </Text>
      </Td>

      <Td textAlign="center" border="1px" p={1}>
        <Text fontSize="12px" my={0}>
          Cubos de hielo {rowData.title} cm
        </Text>
      </Td>

      <Td textAlign="center" border="1px" p={1}>
        <Text fontSize="12px" my={0}>
          {rowData.quantity}
        </Text>
      </Td>

      <Td textAlign="center" border="1px" p={1}>
        <Text fontSize="12px" my={0}>
          {rowData.price}
        </Text>
      </Td>
      <Td textAlign="center" border="1px" p={1}>
        <Text fontSize="12px" my={0}>
          {rowData.importe}
        </Text>
      </Td>
    </Tr>
  );
};
