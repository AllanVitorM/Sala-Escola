import { useState } from "react";
import { BarraLateral } from "../../components/barralateral/sidebar";
import { Title, Subtitle ,LayoutContainer,LateralDireito, ContainerCadastro, LateralEsquerda, ContainerNameDate ,FormContainer } from "./styled";
import SVGCadastro from '../../assets/SVGCadastro.svg';
import { InputName, InputEmail, InputConfirmarEmail, InputPassword, InputConfirmarPassword, DateInput} from '../../components/Input/Input';
import { Checkboxlabel } from "../../components/checkbox/checkbox";
import { Dayjs } from 'dayjs';
import { ButtonPrimary } from "../../components/button/button";

const Cadastro = () => {

    const [DataNasc, setDataNasc] = useState<Dayjs | null>(null);

    return(
        <>
            <LayoutContainer>
                <LateralEsquerda>
                     <ContainerCadastro> 
                        <FormContainer>             
                            <Title>Cadastre-se!</Title>
                            <Subtitle>Agende serviços de beleza com praticidade! Cadastre-se agora e conecte-se aos melhores profissionais da sua região.</Subtitle>
                            <ContainerNameDate>                                    <InputName label="Nome *"/>
                            <DateInput label="Data de Nasc." value={DataNasc} onChange={(newValue) => setDataNasc(newValue)} width="23ch"/>
                            </ContainerNameDate>
                            <InputEmail label="Email *"/>
                            <InputConfirmarEmail label="Confirmar Email *"/>
                            <InputPassword label="Senha"/>
                            <InputConfirmarPassword label="Confirme sua senha"/>
                            <Checkboxlabel />
                            <ButtonPrimary title="Cadastrar"/>
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