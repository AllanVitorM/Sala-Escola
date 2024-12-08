import styled from "styled-components";


export const Title = styled.h3 `
    color: #0F1235;
    font-family: Roboto;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
export const Subtitle = styled.h5 `
    color: #2B2D4B;
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 70%;
    padding: 8px;
`
export const LayoutContainer = styled.div`
    display: flex;
    height: 100vh;  // A altura vai ocupar a tela inteira
    width: 100%;
    background: linear-gradient(90deg, #2B2D4B 29%, #171936 100%);
`;

export const ContainerCadastro = styled.div`
    width: 75%;
    display: flex;
    height: 80vh;
    justify-content: flex-start;
    align-items: center;
    background: #FFF;
    border-radius: 15px;
    position: relative;
    left: 20%;
`

export const LateralDireito = styled.div`
    width: 100%;
    display: flex;
    height: 100vh;
    justify-content: flex-end;
    align-items: center;
`
export const LateralEsquerda = styled.div`
    display: flex;
    justify-content: flex-start;  // Alinha à esquerda
    align-items: center;
    width: 100%;
    padding: 20px;
`
export const ContainerNameDate = styled.div`
    display: flex;
    flex: 1;
`
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;  // Ou uma largura fixa se necessário
`;