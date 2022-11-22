import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
  {

    "_id": "516161",
    "table": "1",
    "status": "DONE",
    "products": [
      {
        "product": {
          "name": "Pizza",
          "image": "5165165",
          "price": 40
        },
        "quantity": 40,
        "_id": "84949494"
      }, {
        "product": {
          "name": "Coca Cola",
          "image": "5165165",
          "price": 40
        },
        "quantity": 40,
        "_id": "84949494"
      },
    ]
  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="⏰"
        title="Fila de Espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👳‍♀️"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={[]}
      />
    </Container>
  );
}