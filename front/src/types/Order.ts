export interface Order {
  _id: string;
  table: string;
  status: string;
  products: {
    _id: string;
    quantity: number;
    product: {
      name: string;
      image: string;
      price: number;
    };
  }[];
}