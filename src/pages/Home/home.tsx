import { LayoutContainer, Content, ContainerAgendamento, TitleAgenda, SubAgenda, SubLocal} from "./styled";
import { Header } from "../../components/header/header";
import { SmallButton } from "../../components/button/button";
import { Tabela } from "../../components/Tabela/Tabela"
import { Menu } from "../../components/menu/menu";
import  et  from "../../assets/ET.jpeg";

const Home = () => {
    return(
        <>
        <LayoutContainer>
            <Menu />
            <Content>
                <Header img={et}/>
                <ContainerAgendamento>
                    <TitleAgenda margin="5%">Ultimo Agendamento</TitleAgenda>
                    <SubAgenda>Alongamento em gel, 14/11/2024 às 01:30 am</SubAgenda>
                    <SubAgenda>Com Roberto Sales</SubAgenda>
                    <SubLocal>Avenida Visconde de Suassuna, 500 - Santo Amaro/Recife</SubLocal>
                    <SmallButton title="Ver Mais"/>
                </ContainerAgendamento>
                <TitleAgenda>Agendamentos Recentes</TitleAgenda>
                <Tabela />
            </Content>
        </LayoutContainer>
        </>
    )

}

export { Home }