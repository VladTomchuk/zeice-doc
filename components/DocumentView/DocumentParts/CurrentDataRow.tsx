import { useTablePreview } from "@/components/GeneratorView/useTablePreview";
import { Box, Text } from "@chakra-ui/react";

export const CurrentDataRow = () => {
  const { currentDate } = useTablePreview();
  return (
    <Box display="flex" justifyContent="space-between">
      <Box w="17%" textAlign="left" pl={1}>
        <Text fontSize="15px" fontStyle="italic" fontWeight={600} m={0} mt={3}>
          Albarán
        </Text>
      </Box>
      <Box w="66%" border="2px" textAlign="center" borderTop="1px">
        <Text fontSize="17px" fontStyle="italic" m={2}>
          Ahorramos papel, salvamos bosques
        </Text>
      </Box>
      <Box w="17%" textAlign="right">
        <Text fontSize="15px" fontWeight={600} m={0} mt={3}>
          {currentDate()}
        </Text>
      </Box>
    </Box>
  );
};
