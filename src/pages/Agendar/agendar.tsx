import { LayoutContainer, MenuLateral, Content } from "./styled";
import { MenuButton } from "../../components/button/button";
import { Header } from "../../components/header/header";
import ET from "../../assets/ET.jpeg"

const Agendar = () => {
    return(
        <>
        <LayoutContainer>
            <MenuLateral>
                <MenuButton title="Início"/>
                <MenuButton title="Agendar"/>
                <MenuButton title="Histórico"/>
                <MenuButton title="Ajuda"/>
                <MenuButton title="Configurações"/>
                <MenuButton title="Sair"/>
            </MenuLateral>
            <Content>
                <Header img={ET}/>
            </Content>
        </LayoutContainer>
        </>
    );
}

export { Agendar }