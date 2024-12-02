import { Title, Subtitle, LayoutContainer, LateralEsquerda, LateralDireita, FormContainer, LinkSenha, LinkCadastro, ContainerLink } from "./styled";
import { BarraLateral } from "../../components/barralateral/sidebar";
import SVGLogin from "../../assets/SVGLogin.svg";
import { InputEmail, InputPassword } from "../../components/Input/Input";
import { ButtonPrimary } from "../../components/button/button";

const Login = () => {
    return(
        <LayoutContainer>
            <LateralEsquerda>
                <BarraLateral img={SVGLogin} />
            </LateralEsquerda>
            <LateralDireita>
                <FormContainer>
                    <Title>Faça o login</Title>
                    <Subtitle>Agende serviços de beleza com facilidade! Escolha horários, profissionais e cuide de você em poucos cliques.</Subtitle>
                    <InputEmail label="Email"/>
                    <InputPassword label="Senha"/>
                    <ContainerLink>
                        <LinkSenha>Esqueceu a senha?</LinkSenha>
                        <LinkCadastro>Cadastre-se!</LinkCadastro>
                    </ContainerLink>
                    <ButtonPrimary title="Login" />
                </FormContainer>
            </LateralDireita>
        </LayoutContainer>
    )
}

export { Login }