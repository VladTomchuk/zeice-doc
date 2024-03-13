import { Product, Client } from "./types";

export const products = [
  { id: "555", title: "5/5/5", price: 31, boxWeight: 7.2, cubes: 60 },
  { id: "557", title: "5/5/7", price: 37, boxWeight: 10, cubes: 60 },
  { id: "4410", title: "4/4/10", price: 32, boxWeight: 8.3, cubes: 54 },
  { id: "4411", title: "4/4/11", price: 33.5, boxWeight: 9.2, cubes: 54 },
  { id: "4412", title: "4/4/12", price: 37, boxWeight: 10, cubes: 54 },
  { id: "444", title: "4.5/4.5/4.5", price: 24, boxWeight: 5.5, cubes: 60 },
  { id: "667", title: "6/6/7", price: 34, boxWeight: 9.7, cubes: 40 },
  { id: "777", title: "7/7/7", price: 32, boxWeight: 9.2, cubes: 28 },
  {
    id: "flores-555",
    title: "flores dentro 5/5/5",
    price: 32,
    boxWeight: 9.2,
    cubes: 28,
  },
  {
    id: "esfera-55",
    title: "Esfera 55 mm",
    price: 45,
    boxWeight: 3.2,
    cubes: 36,
  },
  {
    id: "esfera-65",
    title: "Esfera 65 mm",
    price: 45,
    boxWeight: 4.1,
    cubes: 30,
  },
  {
    id: "esfera-70",
    title: "Esfera 70 mm",
    price: 39,
    boxWeight: 4.6,
    cubes: 26,
  },
  {
    id: "bloque-10",
    title: "Bloque 50/30/7",
    price: 35,
    boxWeight: 10,
    cubes: 1,
  },
  {
    id: "bloque-20",
    title: "Bloque 45/25/18",
    price: 55,
    boxWeight: 20,
    cubes: 1,
  },
] as Product[];

export const clients = [
  {
    id: "sips",
    bar_title: "Sips",
    company_title: "SIPS BAR, S.L.",
    address: "Calle Muntaner, 108 tienda 2, Barcelona, 08036",
    nif: "B-66729112",
  },
  {
    id: "paradiso",
    bar_title: "Paradiso",
    company_title: "Paradiso Born, S.L.",
    address: "Carrer Rera Palau, 4, Barcelona, 08003",
    nif: "B-66597477",
    iban: "ES94 0081 0168 9500 0161 8970",
  },
] as Client[];
// individualPrice: {
//   "esfera-70": 27.5,
//   "557": 34,
//   "4412": 34,
//   "444": 20,
// },

// individualPrice: {
//   "557": 33,
//   "4410": 30,
//   "555": 31,
// },
