import styled from "styled-components";

interface MenuProps{
    height?: string;
}
export const MenuLateral = styled.div<MenuProps>`
    display:flex;
    height: ${(props) => props.height || "100vh"};
    width: 15%;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background: #202240;
`