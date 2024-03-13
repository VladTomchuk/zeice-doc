"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "../app/store/store";
import AppClient from "./AppClient";

export default function AuthorizedUserHomePage({ data }: any) {
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS={false} disableGlobalStyle={true}>
        <AppClient data={data} />
      </ChakraProvider>
    </Provider>
  );
}
