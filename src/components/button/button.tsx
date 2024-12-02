import React from "react";
import { ButtonContainer } from "./styled";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  fontSize?: string;
  fontWeight?: string;
  letterSpacing?: string;
  children?: React.ReactNode;
  to?: string;
}


const ButtonPrimary: React.FC<ButtonProps> = ({title, onClick, fontSize, fontWeight}) => {
  return (
    <>
    <ButtonContainer onClick={onClick} fontSize={fontSize} fontWeight={fontWeight}>
      {title}
    </ButtonContainer>  
    </>
  )
}

export { ButtonPrimary }