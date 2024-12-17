import styled from "styled-components";

interface AllProps {
    margin?: string;
    height?: string;
    width?: string;
    top?: string;
    right?: string;
    left?: string;
    fontSize?: string;
    fontWeight?: string;
    color?: string;
    gap?: string;
    img?: string;
}

export const LayoutContainer = styled.div<AllProps>`
    display: flex;
    height: ${(props) => props.height || "100vh"};
    width: 100%;
    background: #F7F8FF;
`

export const Content = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`

export const ContainerSelect = styled.div<AllProps & { currentStep?: number }>`
    display: flex;
    width: ${(props) => props.currentStep === 3 ? "50%" : props.width || "70%"};
    height: ${(props) => props.height || "40vh"};
    background: #FFF;
    position: relative;
    left: ${(props) => props.currentStep === 3 ? "25%" : props.left || "15%"};
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
export const Row = styled.div<AllProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: ${(props) => props.margin || "7%"};
    margin-left: 5%;
    gap: ${(props) => props.gap || "40px"};
`

export const Column = styled.div<AllProps>`
    display:flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    right: 33.2%;
    top: 6%;
    width: ${(props) => props.width || "100%"};
`
export const Title = styled.h5<AllProps>`
    font-family: Roboto;
    font-size: ${(props) => props.fontSize || "28px"};
    font-weight: ${(props) => props.fontWeight || "500"};
    line-height: ${(props) => props.fontSize || "26px"};
    letter-spacing: 0.46000000834465027px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #000;
    position: relative;
    left: ${(props) => props.left || "5%"};
    top: 10%;
    margin-bottom: 10px;
    color: ${(props) => props.color};
    margin: ${(props) => props.margin};
`
export const SubTitle = styled.h6<AllProps>`
    font-family: Roboto;
    font-size: ${(props) => props.fontSize || "16px"};
    font-weight: ${(props) => props.fontWeight || "400"};
    line-height: 26px;
    letter-spacing: 0.15000000596046448px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    position: relative;
    left: ${(props) => props.left || "5%"};
    margin: ${(props) => props.margin};
    color: ${(props) => props.color || "#000"};
`

export const Line = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5vh;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 6%;
    width: 80%;
    height: 1px;
    background-color: #dcdcdc; // Cor da linha base
    z-index: 0;
  }
`;

export const Imagem = styled.img`
    display: block;
    justify-content: center;
    align-items: center;
    width: 45%;
    margin: 20px auto;

`