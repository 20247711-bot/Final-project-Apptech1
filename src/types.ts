export interface Warehouse {
  id: number;
  name: string;
  address: string;
  capacity: number;
  zones: string[];
  categories: string[];
}

export interface ProductStock {
  id: number;
  productName: string;
  warehouseId: number;
  quantity: number;
}

export interface Admin {
  id: number;
  name: string;
  role: string;
}