import { LayoutContainer, Content, Title } from "./styled";
import { Menu } from "../../components/menu/menu";
import { Header } from "../../components/header/header";
import { TabelaHistorico } from "../../components/Tabela/Tabela";
import ET from "../../assets/ET.jpeg"


const Historico = () => {
    return(
        <LayoutContainer>
            <Menu />   
            <Content>
                <Header img={ET}/>
                <Title>Agendamentos Realizados</Title>
                <TabelaHistorico />
            </Content>
        </LayoutContainer>
    )

}

export { Historico }