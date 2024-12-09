import React from 'react';
import { ContainerHeader, Row, UserPicture } from './styled';

interface imagemProps {
    img: string;
}

const Header: React.FC<imagemProps> = ({img}) => {
    return(
        <ContainerHeader>
            <Row>
                <UserPicture src={img}/>
            </Row>
        </ContainerHeader>
    )
}

export { Header }