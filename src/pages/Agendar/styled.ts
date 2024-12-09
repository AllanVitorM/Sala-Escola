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