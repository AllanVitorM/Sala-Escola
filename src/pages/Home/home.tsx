import { LayoutContainer, MenuLateral, Content, ContainerAgendamento, TitleAgenda, SubAgenda, SubLocal} from "./styled";
import { Header } from "../../components/header/header";
import { MenuButton, SmallButton } from "../../components/button/button";
import { Tabela } from "../../components/Tabela/Tabela"
import  et  from "../../assets/ET.jpeg"

const Home = () => {
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
                <Header img={et}/>
                <ContainerAgendamento>
                    <TitleAgenda>Ultimo Agendamento</TitleAgenda>
                    <SubAgenda>Alongamento em gel, 14/11/2024 às 01:30 am</SubAgenda>
                    <SubAgenda>Com Roberto Sales</SubAgenda>
                    <SubLocal>Avenida Visconde de Suassuna, 500 - Santo Amaro/Recife</SubLocal>
                    <SmallButton title="Ver Mais"/>
                </ContainerAgendamento>
                <TitleAgenda left="8%">Agendamentos Recentes</TitleAgenda>
                <Tabela />
            </Content>
        </LayoutContainer>
        </>
    )

}

export { Home }