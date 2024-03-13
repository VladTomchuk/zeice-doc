export interface Client {
  id: string;
  bar_title: string;
  company_title: string;
  address: string;
  nif: string;
  iban?: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  boxWeight: number;
  cubes: number;
}
export interface IndividualClientPrice {
  id: number;
  client_id: number;
  product_id: number;
  price: number;
}

export interface SupabaseResponseData {
  client: Client[];
  products: Product[];
  individual_price: IndividualClientPrice[];
}
