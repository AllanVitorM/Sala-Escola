import { useState } from "react";
import { BarraLateral } from "../../components/barralateral/sidebar";
import { Title, Subtitle ,LayoutContainer,LateralDireito, ContainerCadastro, LateralEsquerda, ContainerNameDate ,FormContainer } from "./styled";
import SVGCadastro from '../../assets/SVGCadastro.svg';
import { InputName, InputEmail, InputConfirmarEmail, InputPassword, InputConfirmarPassword, DateInput} from '../../components/Input/Input';
import { Checkboxlabel } from "../../components/checkbox/checkbox";
import { Dayjs } from 'dayjs';
import { ButtonPrimary } from "../../components/button/button";
import { useNavigate } from 'react-router-dom'

const Cadastro = () => {
    const navigate = useNavigate();

    const [DataNasc, setDataNasc] = useState<Dayjs | null>(null);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [confirmarEmail, setConfirmarEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleClickCadastro = async () => {
        // Verificar validações (ex: e-mails iguais, senha forte, etc.)
        if (email !== confirmarEmail) {
            alert("Os e-mails não coincidem!");
            return;
        }

        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        try {
            const response = await fetch('/salaoescola/cadastro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Nome: nome,
                    Email: email,
                    Senha: senha,
                    DataNasc: DataNasc?.format('YYYY-MM-DD'),
                }),
            });

            if (response.ok) {
                alert('Cadastro realizado com sucesso!');
                navigate('/');
            } else {
                const errorData = await response.json();
                alert(`Erro: ${errorData.message}`);
            }
        } catch (error) {
            alert('Erro ao cadastrar. Tente novamente mais tarde.');
            console.error(error);
        }
    };

    return(
        <>
            <LayoutContainer>
                <LateralEsquerda>
                     <ContainerCadastro> 
                        <FormContainer>             
                            <Title>Cadastre-se!</Title>
                            <Subtitle>Agende serviços de beleza com praticidade! Cadastre-se agora e conecte-se aos melhores profissionais da sua região.</Subtitle>
                            <ContainerNameDate>                                    
                            <InputName label="Nome *" width="35ch" value={nome} onChange={(e) => setNome(e.target.value)} />
                            <DateInput label="Data de Nasc." value={DataNasc} onChange={(newValue) => setDataNasc(newValue)} width="23ch"/>
                            </ContainerNameDate>
                            <InputEmail label="Email *" width="60ch" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <InputConfirmarEmail label="Confirmar Email *" value={confirmarEmail} onChange={(e) => setConfirmarEmail(e.target.value)}/>
                            <InputPassword label="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                            <InputConfirmarPassword label="Confirme sua senha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)}/>
                            <Checkboxlabel />
                            <ButtonPrimary title="Cadastrar" onClick={handleClickCadastro}/>
                        </FormContainer>
                     </ContainerCadastro>  
                </LateralEsquerda>
                <LateralDireito>
                    <BarraLateral img={SVGCadastro}/>
                </LateralDireito>
            </LayoutContainer>
        </>
    )
}

export { Cadastro }