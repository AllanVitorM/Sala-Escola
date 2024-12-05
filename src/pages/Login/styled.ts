import styled from "styled-components";


export const Title = styled.h3 `
    color: #0F1235;
    font-family: Roboto;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    width: 50%;
    position: relative;
    left: 10%;
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
    padding: 40px;
`
export const LayoutContainer = styled.div`
    display: flex;
    height: 100vh;  // A altura vai ocupar a tela inteira
    width: 100%;
    background: linear-gradient(90deg, #2B2D4B 29%, #171936 100%);
`

export const LateralEsquerda = styled.div`
    width: 100%;
    display: flex;
    height: 100vh;
    justify-content: flex-start;
    align-items: center;
`
export const ContainerLogin = styled.div`
    width: 65%;
    display: flex;
    height: 70vh;
    justify-content: flex-start;
    align-items: center;
    background: #FFF;
    border-radius: 15px;
    position: relative;
    right: 20%;
`

export const LateralDireita = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
`
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;  // Ou uma largura fixa se necessário
`
export const ContainerLink = styled.div`
    display: flex;
    flex: 1;
    width: 55%;
    padding: 10px;
`
export const LinkSenha = styled.a` 
    font-family: var(--fontFamily, Roboto);
    font-size: var(--_fontSize-1rem, 16px);
    font-style: normal;
    font-weight: var(--fontWeightRegular, 400);
    line-height: 150%; /* 24px */
    letter-spacing: 0.15px;
    display: flex;
    flex-direction: row;
    position: relative;
    right: 20%;
    width: 100%;

`
export const LinkCadastro = styled.a` 
    font-family: var(--fontFamily, Roboto);
    font-size: var(--_fontSize-1rem, 16px);
    font-style: normal;
    font-weight: var(--fontWeightRegular, 400);
    line-height: 150%; /* 24px */
    letter-spacing: 0.15px;
    display: flex;
    flex-direction: row;
    width: 100%;
    position: relative;
    left: 42%;

`