import styled from "styled-components";

interface Title {
    margin?: string;
}
export const LayoutContainer = styled.div`
    display: flex;
    height: 100vh;  // A altura vai ocupar a tela inteira
    width: 100%;
    background: #F7F8FF;
    box-sizing: border-box;
`

export const Content = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`

export const ContainerAgendamento = styled.div`
    display: flex;
    width: 40%;
    height: 50vh;
    background: #FFF;
    position: relative;
    margin-left: 7%;
    top: 5%;
    border-radius: 10px;
    box-shadow: 0px 4px 40.3px 0px #9A9CEF40;
    flex-direction: column;
`

export const TitleAgenda = styled.h3<Title>`
    font-family: Roboto;
    font-size: 28px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0.46000000834465027px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #0F1235;
    position: relative;
    top: 17%;
    margin-left: ${(props) => props.margin || "7%"};
`

export const SubAgenda = styled.h6`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.46000000834465027px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    position: relative;
    left: 5%;
    top: 25%;
`

export const SubLocal = styled.h6`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.46000000834465027px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    position: relative;
    left: 5%;
    top: 30%;
`