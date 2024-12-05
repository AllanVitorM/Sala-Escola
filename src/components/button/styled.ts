import styled from "styled-components";

interface ButtonProps {
  fontSize?: string; // Tamanho do texto
  fontWeight?: string; // Peso do texto
  letterSpacing?: string;
}

export const ButtonContainer = styled.button<ButtonProps> `
    display: flex;
    margin: 5px 8px;
    padding: 10px;  
    position: relative;
    left: 10%;

    flex-direction: column;
    justify-Content: center;  
    align-Items: center;
    align-Self: stretch; 
    font-family: "Kumbh Sans", Helvetica, sans-serif;

    color: #FFF;
    border-Radius: 4px;  
    background: #1976D2;  
    width: 77%;
    border: none;
    cursor: pointer;

    font-size: ${(props) => props.fontSize || "16px"};
    font-weight: ${(props) => props.fontWeight || "normal"};
    letter-spacing: ${(props) => props.letterSpacing || "0px"};

    boxShadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12), 
               0px 2px 2px 0px rgba(0, 0, 0, 0.14), 
               0px 3px 1px -2px rgba(0, 0, 0, 0.20);
  
    &:hover {
      background: #145EA6; 
    }
  `