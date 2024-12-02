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
    width: 60%;
    padding: 8px;
`
export const LayoutContainer = styled.div`
    display: flex;
    height: 100vh;  // A altura vai ocupar a tela inteira
    width: 100%;
`

export const LateralEsquerda = styled.div`
    width: 100%;
    display: flex;
    height: 100vh;
    justify-content: flex-start;
    align-items: center;
`
export const LateralDireita = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding: 20px;
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
    width: 50%;
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
    right: 14%;
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
    left: 40%;

`