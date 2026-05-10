import type { Warehouse, ProductStock, Admin } from "../types";

export const defaultWarehouses: Warehouse[] = [
  { id: 1, name: "Main Warehouse" },
  { id: 2, name: "Electronics Storage" }
];

export const defaultStocks: ProductStock[] = [
  { id: 1, productName: "Keyboard", quantity: 50 },
  { id: 2, productName: "Mouse", quantity: 30 }
];

export const defaultAdmins: Admin[] = [
  { id: 1, name: "Admin", role: "Super Admin" },
  { id: 2, name: "John", role: "Manager" }
];