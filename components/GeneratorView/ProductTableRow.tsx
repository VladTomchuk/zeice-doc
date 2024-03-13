import { useClientDataSelector } from "@/app/store/ClientData/clientDataSelector";
import { useTableDataSelector } from "@/app/store/TableData/tableDataSelector";
import { RowInputData } from "@/app/store/TableData/tableDataSlice";
import {
  Button,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import { Fragment, memo, ChangeEvent } from "react";

interface Props {
  rowData: RowInputData;
  removeRowCallback: (id: string) => void;
  updateDateHandler: (id: string, value: string) => void;
  updateQuantityCallbak: (quantity: number, id: string) => void;
  setProductCallback: (id: string, price: number, title: string) => void;
}

const ProductTableRow = ({
  rowData,
  removeRowCallback,
  updateDateHandler,
  updateQuantityCallbak,
  setProductCallback,
}: Props) => {
  const { selectedClient, individualPrice } = useClientDataSelector();
  const { products } = useTableDataSelector();

  const changeDateHandler = (e: any) => {
    updateDateHandler(rowData.id, e.target.value);
  };
  const removeRowHandler = (e: any) => {
    removeRowCallback(rowData.id);
  };

  const selectProductHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    let totalCost = 0;

    const foundProduct = products.find(
      (product) => String(product.id) === selectedId
    );

    if (!foundProduct) {
      console.error("Продукт не найден.");
      return;
    }
    const isFoundProductIndividualPrices = individualPrice.find(
      (i) =>
        String(i.client_id) === String(selectedClient?.id) &&
        String(i.product_id) === String(selectedId)
    );

    if (!isFoundProductIndividualPrices) {
      totalCost = foundProduct.price;
    } else {
      totalCost = isFoundProductIndividualPrices.price;
    }

    setProductCallback(rowData.id, totalCost, foundProduct.title);
  };

  return (
    <Fragment>
      <Tr fontStyle="italic">
        <Td textAlign="center" border="1px" py={0}>
          <Text fontSize="11px" my={0}>
            <Input
              value={rowData.date}
              w="130px"
              onChange={changeDateHandler}
              placeholder="dd/mm/yyyy"
            />
          </Text>
        </Td>

        <Td border="1px" py={0}>
          <Select onChange={selectProductHandler}>
            <option>{rowData.title}</option>
            {products.map((i) => {
              return (
                <option key={i.title} value={i.id}>
                  {i.title}
                </option>
              );
            })}
          </Select>
        </Td>

        <Td border="1px" my={0}>
          <NumberInput
            value={rowData.quantity}
            onChange={(valueAsString: string, valueAsNumber: number) =>
              updateQuantityCallbak(valueAsNumber, rowData.id)
            }
            max={50}
            min={0}
          >
            <NumberInputField w="50px" />
            <NumberInputStepper right={2}>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Td>

        <Td border="1px" my={0}>
          {rowData.price}
        </Td>
        <Td border="1px" my={0}>
          {rowData.importe}
        </Td>
        <Td>
          <Button size="sm" onClick={removeRowHandler}>
            X
          </Button>
        </Td>
      </Tr>
    </Fragment>
  );
};

export default memo(ProductTableRow);
