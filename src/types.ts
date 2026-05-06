export interface Warehouse {
  id: number;
  name: string;
}

export interface ProductStock {
  id: number;
  productName: string;
  quantity: number;
}

export interface Admin {
  id: number;
  name: string;
  role: string;
}