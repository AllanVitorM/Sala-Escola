import { LayoutContainer, MenuLateral } from "./styled";
import { Header } from "../../components/header/header";
import { MenuButton } from "../../components/button/button";

const Home = () => {
    return(
        <LayoutContainer>
            <MenuLateral>
                <MenuButton title="Início"/>
                <MenuButton title="Agendar"/>
                <MenuButton title="Histórico"/>
                <MenuButton title="Ajuda"/>
                <MenuButton title="Configurações"/>
                <MenuButton title="Sair"/>
            </MenuLateral>
            <Header />
        </LayoutContainer>

    )

}

export { Home }