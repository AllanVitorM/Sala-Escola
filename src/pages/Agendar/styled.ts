import styled from "styled-components";

export const LayoutContainer = styled.div`
    display: flex;
    height: 100vh;  // A altura vai ocupar a tela inteira
    width: 100%;
    background: #F7F8FF;
`

export const MenuLateral = styled.div`
    display:flex;
    height: 100vh;
    width: 15%;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background: #202240;
`

export const Content = styled.div`
    display: flex;
    width: 85%;
    flex-direction: column;
`

export const ContainerSelect = styled.div`
    display: flex;
    width: 70%;
    height: 40vh;
    background: #FFF;
    position: relative;
    left: 15%;
    top: 13%;
    border-radius: 10px;
    box-shadow: 0px 4px 40.3px 0px #9A9CEF40;
    flex-direction: column;
`

export const ContainerStep = styled.div`
    display: flex;
    width: 60%;
    height: 20vh;
    background: #FFF;
    position: relative;
    left: 20%;
    top: 10%;
    border-radius: 10px;
    box-shadow: 0px 4px 40.3px 0px #9A9CEF40;
    flex-direction: column;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 7%;
    margin-left: 5%;
    gap: 40px;
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    right: 32.6%;
    top: 6%;
`
export const Title = styled.h5`
    font-family: Roboto;
    font-size: 28px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0.46000000834465027px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #000;
    position: relative;
    left: 5%;
    top: 10%;
`

export const Line = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 10%;
    width: 80%;
    height: 1px;
    background-color: #dcdcdc; // Cor da linha base
    z-index: 0;
  }
`;