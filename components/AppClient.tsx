import {
  setClients,
  setIndividualClientPrice,
} from "@/app/store/ClientData/clientDataSlice";
import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { PDFFile } from "./DocumentView/PDFFile";

import { setProducts } from "@/app/store/TableData/tableDataSlice";
import PreviewContainer from "./GeneratorView/PreviewContainer";

export default function AppClient({ data }: any) {
  const [verWeb, setVerWeb] = useState(false);
  const [verPdf, setVerPdf] = useState(false);
  const dispatch = useDispatch();

  const Menu = () => {
    return (
      <nav>
        <Button
          mr={5}
          onClick={() => {
            setVerWeb(!verWeb);
            setVerPdf(false);
          }}
        >
          {verWeb ? "Close Generetor" : "Open Generetor"}
        </Button>
        <Button
          onClick={() => {
            setVerWeb(false);
            setVerPdf(!verPdf);
          }}
        >
          {verPdf ? "Close PDF View" : "Open PDF View"}
        </Button>
      </nav>
    );
  };
  useEffect(() => {
    dispatch(setClients(data.clients));
    dispatch(setProducts(data.products));
    dispatch(setIndividualClientPrice(data.individual_price));
  }, []);
  return (
    <>
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "Center",
          alignItems: "center",
          minHeight: "100vh",
          padding: "25px",
        }}
      >
        <Menu />
        <>
          {verWeb ? <PreviewContainer /> : null}
          {verPdf ? <PDFFile /> : null}
        </>
      </div>
    </>
  );
}
