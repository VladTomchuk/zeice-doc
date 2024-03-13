import { Box, Flex } from "@chakra-ui/react";
import { Fragment } from "react";
import { usePDF } from "react-to-pdf";
import { ClientData } from "./DocumentParts/ClientData";
import { CurrentDataRow } from "./DocumentParts/CurrentDataRow";
import { DistributorData } from "./DocumentParts/DistributorData";
import { OrderTable } from "./DocumentParts/OrderTable";
import { TotalCountTable } from "./DocumentParts/TotalCountTable";
import { Undertext } from "./DocumentParts/Undertext";
import { useClientDataSelector } from "@/app/store/ClientData/clientDataSelector";
import { useTablePreview } from "../GeneratorView/useTablePreview";

export const PDFFile = () => {
  const { currentDate } = useTablePreview();
  const { selectedClient } = useClientDataSelector();
  const { toPDF, targetRef } = usePDF({
    filename: `albaran ${currentDate()} ${selectedClient?.bar_title}`,
  });

  return (
    <Fragment>
      <button onClick={() => toPDF()}>Download PDF</button>
      <Flex
        flexDirection="column"
        ref={targetRef}
        px={50}
        py={25}
        maxHeight={"297mm"}
      >
        <Box mb="10%">
          <DistributorData />
          <CurrentDataRow />
          <ClientData />
          <OrderTable />
          <TotalCountTable />
          <Undertext />
        </Box>
        <Box>
          <DistributorData />
          <CurrentDataRow />
          <ClientData />
          <OrderTable />
          <TotalCountTable />
          <Undertext />
        </Box>
      </Flex>
    </Fragment>
  );
};
