import React from "react";
import { BarLateral } from "./styled";

interface imagemProps {
    img: string;
}

const BarraLateral: React.FC <imagemProps> = ({ img }) => {
    return (
        <>
        <BarLateral>
            <img src={img} alt="teste"/>
        </BarLateral>
        </>
    )
}

export { BarraLateral }