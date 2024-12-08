import { ContainerHeader, Row, UserPicture } from './styled';

const Header = () => {
    return(
        <ContainerHeader>
            <Row>
                <UserPicture />
            </Row>
        </ContainerHeader>
    )
}

export { Header }