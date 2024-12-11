import { useState } from "react";
import { LayoutContainer,Line ,MenuLateral, Content, ContainerStep, ContainerSelect, Title, Row, Column } from "./styled";
import { MenuButton } from "../../components/button/button";
import { Header } from "../../components/header/header";
import { ProcessSteps } from "../../components/Process/process";
import { BoxProfissional, BoxHorario, BoxServico, BoxPagamento } from "../../components/boxselect/box";
import { DateInput, InputName, InputEmail } from "../../components/Input/Input";
import { Dayjs } from 'dayjs';
import { SmallButton } from "../../components/button/button";
import Confirmado from "../../assets/Confirmado.svg";
import Cadeado from "../../assets/Cadeado.svg";
import ET from "../../assets/ET.jpeg"

const Agendar = () => {

    const [DataServ, setDataServ] = useState<Dayjs | null>(null);
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        { icon: currentStep > 1 ? Confirmado : Cadeado, label: "Serviço", stepNumber: "1", completed: currentStep > 1 },
        { icon: currentStep > 2 ? Confirmado : Cadeado, label: "Pagamento", stepNumber: "2", completed: currentStep > 2 },
        { icon: currentStep > 3 ? Confirmado : Cadeado, label: "Verificar Informações", stepNumber: "3", completed: currentStep > 3 },
      ];

      const avancarEtapa = () => {
        if (currentStep < 3) setCurrentStep(currentStep + 1); // Avança para a próxima etapa
      };
    
      const voltarEtapa = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1); // Volta para a etapa anterior
      };

    return(
        <>
        <LayoutContainer>
            <MenuLateral>
                <MenuButton title="Início"/>
                <MenuButton title="Agendar"/>
                <MenuButton title="Histórico"/>
                <MenuButton title="Ajuda"/>
                <MenuButton title="Configurações"/>
                <MenuButton title="Sair"/>
            </MenuLateral>
            <Content>
                <Header img={ET}/>
                <ContainerStep>
                    <ProcessSteps steps={steps}/>
                </ContainerStep>
                <ContainerSelect>
                    {currentStep === 1 && (
                    <>
                    <Title>Selecione um serviço</Title>
                    <Row>
                        <BoxProfissional />
                        <BoxServico />
                        <BoxHorario />
                    </Row>
                    <Column>
                        <DateInput label="Selecione uma Data" value={DataServ} onChange={(newValue) => setDataServ(newValue)} width="35ch"/>
                    </Column>
                    <Line />
                    <SmallButton title="Próximo" left="66%" top="0%" onClick={avancarEtapa}/>
                    </>
                    )}
                    {currentStep === 2 && (
                    <>
                    <Title>Pagamento</Title>
                    <Row>
                        <InputName label="Nome" width="35ch"/>
                        <InputEmail label="Email" width="35ch"/>
                        <BoxPagamento />
                    </Row>
                    <SmallButton title="Próximo" left="66%" top="10%" onClick={avancarEtapa}/>
                    </>
                    )}
                </ContainerSelect>
            </Content>
        </LayoutContainer>
        </>
    );
}

export { Agendar }


