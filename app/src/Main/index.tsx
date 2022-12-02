import { CategoriesContainer, Container, Footer, FooterContainer, MenuContainer } from "./styles";

import { Header } from "../components/Header";
import { Categories } from "../components/Categories";
import { Menu } from "../components/Menu";
import { Button } from "../components/Button";
import { TableModal } from "../components/TableModal";

export function Main() {
  return (
    <>
      <Container>
        <Header />
        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>
        <MenuContainer>
          <Menu />
        </MenuContainer>

      </Container>
      <Footer>
        <FooterContainer>
          <Button onPress={() => alert("Novo Pedido")}>
            Novo Pedido
          </Button>
        </FooterContainer>
      </Footer>
      <TableModal />
    </>
  );
}