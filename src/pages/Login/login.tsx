import { Title, Subtitle, LayoutContainer, LateralEsquerda, LateralDireita, ContainerLogin,FormContainer, LinkSenha, LinkCadastro, ContainerLink } from "./styled";
import { BarraLateral } from "../../components/barralateral/sidebar";
import SVGLogin from "../../assets/SVGLogin.svg";
import { InputEmail, InputPassword } from "../../components/Input/Input";
import { ButtonPrimary } from "../../components/button/button";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";



const Login = () => {
    
    const navigate = useNavigate();

    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleClickLogin = async () => {
        try {
            const response = await fetch('/salaoescola/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Email: email,
                    Senha: senha,
                }),
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log("Resposta da API:", data);  // Adicionado para verificar a estrutura da resposta
    
                // Certifique-se de que a chave 'idCliente' realmente existe na resposta
                if (data && data.idCliente) {
                    console.log("Login bem-sucedido. Token recebido:", data.token);
                    if (data.token) {
                        localStorage.setItem('token', data.token);
                    }
                    
                    if (data.idCliente) {
                        localStorage.setItem('userId', data.idCliente);
                    } else {
                        console.error("ID do cliente não retornado pela API.");
                    }
                    console.log("ID do usuário armazenado no localStorage:", data.idCliente);
                } else {
                    console.log("Erro: A chave 'idCliente' não está presente na resposta.");
                }
    
                navigate('/home'); // Redirecionar para a página inicial após o login
            } else {
                const errorData = await response.json();
                alert(`Erro: ${errorData.message}`);
            }
        } catch (error) {
            alert('Erro ao fazer login. Tente novamente mais tarde.');
            console.error(error);
        }
    };

    return(
        <LayoutContainer>
            <LateralEsquerda>
                <BarraLateral img={SVGLogin} />
            </LateralEsquerda>
            <LateralDireita>
                <ContainerLogin>
                    <FormContainer>
                        <Title>Faça o login</Title>
                        <Subtitle>Agende serviços de beleza com facilidade! Escolha horários, profissionais e cuide de você em poucos cliques.</Subtitle>
                        <InputEmail label="Email" width="60ch" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <InputPassword label="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                        <ContainerLink>
                            <LinkSenha>Esqueceu a senha?</LinkSenha>
                            <LinkCadastro href="/cadastro">Cadastre-se!</LinkCadastro>
                        </ContainerLink>
                        <ButtonPrimary title="Login" onClick={handleClickLogin}/>
                        <Subtitle>Ainda não possui conta? cadastre-se!</Subtitle>
                    </FormContainer>
                </ContainerLogin>
            </LateralDireita>
        </LayoutContainer>
    )
}

export { Login }