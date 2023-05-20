export type ProductsTableType = {
  id: number;
  namn: string;
  ursprung: string;
  scoville: number;
  styckpris: number;
  antal: number;
}[];

export const defaultProductsTable = [
  {
    id: 0,
    namn: "",
    ursprung: "",
    scoville: 0,
    styckpris: 0,
    antal: 0,
  },
];
