import { TableContainer, Table, Tr, Td, Text } from "@chakra-ui/react";

export const DistributorData = () => {
  return (
    <TableContainer w="185mm">
      <Table variant="unstyled" border="1px">
        <Tr>
          <Td w="50%" textAlign="left" border="1px" py={1} px={5}>
            <Text m={0} fontWeight={800} fontSize="12px" textTransform="none">
              ZEICEBCN, S.L
            </Text>
          </Td>
          <Td w="50%" textAlign="right" border="1px" py={1} px={5}>
            <Text m={0} fontWeight={800} fontSize="12px" textTransform="none">
              NIF: B-10947158
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td w="50%" textAlign="left" border="1px" py={0} px={5}>
            <Text
              m={0}
              fontStyle="italic"
              fontSize="12px"
              textTransform="none"
              lineHeight="16px"
            >
              Passatge de Llívia, 5, p. 1-1a <br />
              08041, Barcelona
            </Text>
          </Td>
          <Td w="50%" textAlign="right" border="1px" py={1} px={5}>
            <Text
              m={0}
              fontWeight={500}
              fontSize="12px"
              textTransform="none"
              lineHeight="16px"
            >
              IBAN ES90 2100 3278 6622 0028 7978
            </Text>
          </Td>
        </Tr>
      </Table>
    </TableContainer>
  );
};
