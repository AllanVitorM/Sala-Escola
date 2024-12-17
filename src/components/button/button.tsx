import React from "react";
import { ButtonContainer, ButtonMenu, ButtonSmall } from "./styled";
import { useLocation } from "react-router-dom";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  fontSize?: string;
  fontWeight?: string;
  letterSpacing?: string;
  children?: React.ReactNode;
  to?: string;
  left?: string;
  top?: string;
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

const MenuButton: React.FC<ButtonProps> = ({title, onClick, fontSize, fontWeight, children, to}) => {

  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <>
    <ButtonMenu onClick={onClick} fontSize={fontSize} fontWeight={fontWeight} isActive={isActive}>
      {children}
      {title}
    </ButtonMenu>  
    </>
  )
}

const SmallButton: React.FC<ButtonProps> = ({title, onClick, fontSize, fontWeight, left, top}) => {
  return (
    <>
    <ButtonSmall onClick={onClick} fontSize={fontSize} fontWeight={fontWeight} left={left} top={top}>
      {title}
    </ButtonSmall>  
    </>
  )
}

export { ButtonPrimary, MenuButton, SmallButton }