import { Overlay, ModalBody, OrderDetails } from "./styles";

import closeIcon from "../../assets/images/close-icon.svg";
import { Order } from "../../types/Order";

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
}

export function OrderModal({ visible, order }: OrderModalProps) {
  if (!visible || !order) {
    return null;
  }
  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button">
            <img src={closeIcon} alt="Ícone de fechar"></img>
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>🕐</span>
            <strong>Fila de Espera</strong>
          </div>

        </div>
        <OrderDetails>
          <strong>Itens</strong>
        </OrderDetails>
      </ModalBody>
    </Overlay>
  );
}