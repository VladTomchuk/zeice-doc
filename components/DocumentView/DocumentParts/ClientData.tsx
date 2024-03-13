import { useClientDataSelector } from "@/app/store/ClientData/clientDataSelector";
import { Flex, Text } from "@chakra-ui/react";

export const ClientData = () => {
  const { selectedClient } = useClientDataSelector();
  return (
    <Flex justifyContent="space-between" alignItems="center" mt="15px">
      <Flex
        fontSize="12px"
        alignItems="flex-start"
        flexDirection="column"
        gap={1}
      >
        <Text fontWeight={600} m={0}>
          Client: {selectedClient?.bar_title}
        </Text>
        <Text fontWeight={400} m={0}>
          {selectedClient?.company_title}
        </Text>
        <Text fontWeight={400} m={0}>
          {selectedClient?.address}
        </Text>
        <Text fontWeight={400} m={0}>
          {selectedClient?.iban}
        </Text>
      </Flex>
      <Flex>
        <Text fontSize="13px" m={0}>
          NIF: {selectedClient?.nif}
        </Text>
      </Flex>
    </Flex>
  );
};
