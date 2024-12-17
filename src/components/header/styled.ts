import styled from "styled-components";

export const ContainerHeader = styled.div`
    width: 100%;
    height: 10vh;
    background: #FFF;
    display: flex;
    justify-content: flex-end;
    border: 1px solid #D9DBE6;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const UserPicture = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #000;
    display: inline-block;
    position: relative;
    right: 100%;
`