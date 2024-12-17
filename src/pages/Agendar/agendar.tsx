import { useState, useEffect } from "react";
import { LayoutContainer, Line, Content, ContainerStep, ContainerSelect, Title, SubTitle, Row, Column, Imagem} from "./styled";
import { Menu } from "../../components/menu/menu";
import { Header } from "../../components/header/header";
import { ProcessSteps } from "../../components/Process/process";
import { BoxProfissional, BoxHorario, BoxServico, BoxPagamento } from "../../components/boxselect/box";
import { DateInput, InputName, InputEmail } from "../../components/Input/Input";
import { Dayjs } from 'dayjs';
import { SmallButton } from "../../components/button/button";
import Confirmado from "../../assets/Confirmado.svg";
import Cadeado from "../../assets/Cadeado.svg";
import ET from "../../assets/ET.jpeg"
import AgendamentoConf from "../../assets/AgendamentoConf.svg"

interface Servico {
    idServico: number;
    Nome: string;
    Valor: number;
  }

const Agendar = () => {

    const [DataServ, setDataServ] = useState<Dayjs | null>(null);
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<{  
        profissionalId: number | null;
        servico: string;
        horario: string;
        metodoPagamento: string;
      }>({
        profissionalId: null,
        servico: "",
        horario: "",
        metodoPagamento: "",
      });

      useEffect(() => {
        console.log("Método de Pagamento atualizado:", formData.metodoPagamento);
      }, [formData.metodoPagamento]);

    const [nomeFuncionario, setNomeFuncionario] = useState<string>("");
    const [nomeServico, setNomeServico] = useState<string>("");
    const [servicos, setServicos] = useState<Servico[]>([]);
    const [userData, setUserData] = useState<{ nome: string; email: string, id: number }>({ nome: "", email: "", id: 0 });
    const [servicoSelecionado, setServicoSelecionado] = useState<{ nome: string; valor: number }>({
        nome: '',
        valor: 0,
      });
      const valorFormatado = servicoSelecionado.valor > 0 
      ? servicoSelecionado.valor.toFixed(2) 
      : '0.00';

    console.log("Valor Formatado: ", valorFormatado); // Para depuração
    useEffect(() => {
        console.log('Serviço selecionado atualizado:', servicoSelecionado);
      }, [servicoSelecionado]); 
    

    const steps = [
        { icon: currentStep > 1 ? Confirmado : Cadeado, label: "Serviço", stepNumber: "1", completed: currentStep > 1 },
        { icon: currentStep > 2 ? Confirmado : Cadeado, label: "Pagamento", stepNumber: "2", completed: currentStep > 2 },
        { icon: currentStep > 3 ? Confirmado : Cadeado, label: "Verificar Informações", stepNumber: "3", completed: currentStep > 3 },
      ];

      const fetchUserData = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("Token de autenticação não encontrado.");
            return;
        }
    
        // Recuperando o userId armazenado no localStorage
        const userId = localStorage.getItem('userId');
        if (!userId) {
            console.error("ID do usuário não encontrado.");
            return;
        }
    
        try {
            const response = await fetch(`/salaoecola/clientes/${userId}`, {
                headers: { 'Authorization': `Bearer ${token}` },
            });
    
            const data = await response.json();
            console.log("Dados do usuário:", data);
    
            setUserData({
                nome: data.Nome,
                email: data.Email,
                id: data.idCliente || 0,  // Atualizando o ID corretamente
            });
    
        } catch (error) {
            console.error("Erro ao fazer a requisição:", error);
            alert("Erro ao buscar dados do usuário. Tente novamente.");
        }
    };
    useEffect(() => {
        console.log("ID do usuário foi atualizado para:", userData.id);
    }, [userData.id]);

    useEffect(() => {
        if (!formData.profissionalId) {
        console.warn("ID do profissional não selecionado.");
        return;
        }
    
        const fetchFuncionario = async () => {
        try {
            const response = await fetch(`/salaoescola/funcionario/${formData.profissionalId}`);
            if (!response.ok) {
            throw new Error(`Erro na API: ${response.statusText}`);
            }
            const data = await response.json();
            console.log("Funcionário encontrado:", data);
            setNomeFuncionario(data.Nome);
        } catch (err) {
            console.error("Erro ao buscar o nome do funcionário:", err);
        }
        };
    
        fetchFuncionario();
    }, [formData.profissionalId]);

    useEffect(() => {
        if (!nomeServico) return; // Evita requisições desnecessárias

        const fetchServicosByNome = async (nomeServico: string) => {
            try {
                const response = await fetch(`/salaoescola/servicos/nome/${nomeServico}`);
                if (!response.ok) throw new Error('Erro ao buscar serviço.');

                const data: Servico = await response.json();
                setServicos([data]);
                setServicoSelecionado({ nome: data.Nome, valor: Number(data.Valor) || 0 });
            } catch (error) {
                console.error(error);
            }
        };

        fetchServicosByNome(nomeServico);
    }, [nomeServico]);

    useEffect(() => {
        console.log('Serviços atualizados:', servicos);
    }, [servicos]); 

    const avancarEtapa = async () => { 
        if (currentStep === 3) {
            // Enviar dados ao backend ao finalizar
            if (userData.id === 0) {
                alert('ID do cliente não encontrado. Tente novamente.');
                return;
            }
            try {
                const token = localStorage.getItem("token");
                const response = await fetch('/salaoescola/agendamento', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        Funcionario_idFuncionario: formData.profissionalId, // ID do funcionário
                        Cliente_idCliente: userData.id, // Usando o ID correto
                        Status: 'pendente', // Status do agendamento
                        DataAgenda: DataServ?.format("YYYY-MM-DD"), // Certifique-se de que DataServ não é null
                    }),
                });
    
                if (response.ok) {
                    alert('Agendamento realizado com sucesso!');
                    setCurrentStep(currentStep + 1);
                } else {
                    const errorData = await response.json();
                    alert(`Erro: ${errorData.message}`);
                }
            } catch (error) {
                alert('Erro ao realizar agendamento. Tente novamente mais tarde.');
                console.error(error);
            }
        } else {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value });
    };
    
    const handleServicoChange = (servico: Servico) => {
        console.log('Serviço selecionado:', servico);
    
        const servicoComValor = { 
            nome: servico.Nome, 
            valor: Number(servico.Valor) || 0, 
        };
    
        setServicoSelecionado(servicoComValor);
        setTimeout(() => { // Aguarda o setState completar
            console.log('Serviço selecionado após atualização:', servicoComValor);
        }, 0);
    
        handleInputChange("servico", servico.Nome);
    };


      const voltarEtapa = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1); // Volta para a etapa anterior
      };
    return(
        <>
        <LayoutContainer 
        height={currentStep === 1 || currentStep === 4? "100vh" : "120vh"} 
        width={currentStep === 1 ? "100%" : "70%"}>
            <Menu height={currentStep === 1 || currentStep === 4? "100vh" : "120vh"}/>       
            <Content>
                <Header img={ET}/>
                {currentStep < 4 && (
                <>
                <ContainerStep>
                    <ProcessSteps steps={steps}/>
                </ContainerStep>
                <ContainerSelect 
                currentStep={currentStep}
                height={currentStep === 1 ? "40vh" : "65vh"}>
                    {currentStep === 1 && (
                    <>
                    <Title>Selecione um serviço</Title>
                    <Row>
                        <BoxProfissional onSelect={(id) => setFormData((prev) => ({ ...prev, profissionalId: id }))} />
                        <BoxServico onSelect={handleServicoChange} />
                        <BoxHorario formData={formData} setFormData={setFormData}/>
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
                        <InputName label="Nome" value={userData.nome}width="35ch" />
                        <InputEmail label="Email" value={userData.email} width="35ch"/>
                        <BoxPagamento formData={formData} setFormData={setFormData} />
                    </Row>
                    <Line />
                    <Title fontSize="20px">Preço do Serviço Solicitado</Title>
                    <Row margin="5%">
                        <SubTitle margin="1% 56.8% 0% 0%">{ servicoSelecionado.nome }</SubTitle>
                        <SubTitle>R$ {valorFormatado}</SubTitle>
                    </Row>
                    <Row margin="2%">
                        <SubTitle margin="0% 53.2% 0% 0%">Taxa de Serviço:</SubTitle>
                        <SubTitle>R$ 00.00</SubTitle>
                    </Row>
                    <Row margin="5%">
                        <SubTitle margin="0% 53% 0% 0%" color="#2E7D32" fontWeight="600" fontSize="20px">Preço Total</SubTitle>
                        <SubTitle color="#2E7D32" fontWeight="600" fontSize="20px">R$ {valorFormatado}</SubTitle>
                    </Row>
                    <Line />
                    <Row margin="1%">
                        <SmallButton title="Voltar" left="1%" top="1%" onClick={voltarEtapa}/>
                        <SmallButton title="Próximo" left="30%" top="1%" onClick={avancarEtapa}/>
                    </Row>
                    </>
                    )}
                    {currentStep === 3 && (
                    <>
                    <Title>Verificar as Informações</Title>
                    <Row margin="15%">
                        <Column width="100%">
                            <Title fontWeight="400" fontSize="16px" color="#6D6F81" left="25%">Profissional</Title>
                            <SubTitle fontWeight="500" fontSize="16px" left="25%">{nomeFuncionario}</SubTitle>
                        </Column>
                        <Column width="40%">
                            <Title fontWeight="400" fontSize="16px" color="#6D6F81" left="50%">Serviço</Title>
                            <SubTitle fontWeight="500" fontSize="16px" left="50%">{servicoSelecionado.nome}</SubTitle>
                        </Column>
                        </Row>
                        <Row margin="5%">
                        <Column width="100%">
                            <Title fontWeight="400" fontSize="16px" color="#6D6F81" left="25%">Data</Title>
                            <SubTitle fontWeight="500" fontSize="16px" left="25%">{DataServ?.format("DD/MM/YYYY")}</SubTitle>
                        </Column>
                        <Column width="40%">
                            <Title fontWeight="400" fontSize="16px" color="#6D6F81" left="50%">Horário</Title>
                            <SubTitle fontWeight="500" fontSize="16px" left="50%">{formData.horario}</SubTitle>
                        </Column>
                        </Row>
                        <Row margin="5%">
                        <Column width="100%">
                            <Title fontWeight="400" fontSize="16px" color="#6D6F81" left="25%">Método de Pagamento</Title>
                            <SubTitle fontWeight="500" fontSize="16px" left="25%">{formData.metodoPagamento}</SubTitle>
                        </Column>
                        <Column width="40%">
                            <Title fontWeight="400" fontSize="16px" color="#6D6F81" left="50%">Total do Serviço</Title>
                            <SubTitle fontWeight="500" fontSize="16px" left="50%" >R$ {valorFormatado}</SubTitle>
                        </Column>
                        </Row>
                        <Line />
                    <SmallButton title="Confirmei" left="66%" top="0%" onClick={avancarEtapa}/>
                    </>
                    )}
                </ContainerSelect>
                </>
            )}
            {currentStep === 4 && (
                <>
                    <Imagem src={AgendamentoConf} />
                    <SubTitle fontSize="16px" left="43%" margin="1% 0%" color="#0066CA">Faça um novo agendamento</SubTitle>
                </>
            )}
            </Content>
        </LayoutContainer>
        </>
    );
}

export { Agendar }


