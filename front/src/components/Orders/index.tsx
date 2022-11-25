import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
  {

    "_id": "516161",
    "table": "1",
    "status": "WAITING",
    "products": [
      {
        "product": {
          "name": "Pizza",
          "image": "1669392827231-pizza.jpg",
          "price": 30
        },
        "quantity": 4,
        "_id": "84949494"
      }, {
        "product": {
          "name": "Coca Cola",
          "image": "1669417474284-cocacola.jpeg",
          "price": 7
        },
        "quantity": 3,
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