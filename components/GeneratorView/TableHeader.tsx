import { Tr, Th, Text } from "@chakra-ui/react";
import { memo } from "react";

const TableHeader = () => {
  return (
    <Tr bg="lightgray">
      <Th textAlign="center" border="1px" py={0} px={1}>
        <Text fontSize="11px" textTransform="none">
          Fecha de entrega
        </Text>
      </Th>
      <Th textAlign="center" border="1px" py={0} px={1}>
        <Text fontSize="11px" textTransform="none">
          Nombre del producto
        </Text>
      </Th>
      <Th textAlign="center" border="1px" py={0} px={1}>
        <Text fontSize="11px" textTransform="none">
          Cantidad, cajas
        </Text>
      </Th>
      <Th textAlign="center" border="1px" py={0} px={1}>
        <Text fontSize="11px" textTransform="none">
          Precio, euro/caja
        </Text>
      </Th>
      <Th textAlign="center" border="1px" py={0} px={1}>
        <Text fontSize="11px" textTransform="none">
          Importe, euro
        </Text>
      </Th>
    </Tr>
  );
};

export default memo(TableHeader);
