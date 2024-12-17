import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { horario, pagamento } from './styled';

interface BoxProfissionalProps {
  onSelect: (id: number) => void; // Agora passamos o ID
}
interface Funcionario {
  idFuncionario: number;
  Nome: string;
}

type BoxProps = {
  formData: {
    profissionalId: number | null;
    servico: string;
    horario: string;
    metodoPagamento: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      profissionalId: number | null;
      servico: string;
      horario: string;
      metodoPagamento: string;
    }>
  >;
};

const BoxProfissional = ({ onSelect }: BoxProfissionalProps) => {
  
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFuncionarios = async () => {
      try {
        const response = await fetch('/salaoescola/funcionarios');
        if (!response.ok) {
          throw new Error(`Erro na API: ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Funcionários carregados:", data);
        setFuncionarios(data);
        setIsLoading(false);
      } catch (err) {
        console.error("Erro ao buscar profissionais:", err);
        setError("Erro ao carregar profissionais. Tente novamente mais tarde.");
        setIsLoading(false);
      }
    };

    fetchFuncionarios();
  }, []);

  if (isLoading) {
    return <p>Carregando profissionais...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
 
  return (
    <>
    <Autocomplete
      disablePortal
      options={funcionarios}  // Supondo que funcionario tenha estrutura { label: string, year: number }
      getOptionLabel={(option) => option.Nome}  // Usando 'label' no lugar de 'nome'
      onChange={(event, newValue) => {
        if (newValue && newValue.idFuncionario) {
          onSelect(newValue.idFuncionario);
        }
      }}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Profissional" />}
    />
    </>
  );
}

interface BoxServicoProps {
  onSelect: (value: Servico) => void;
}

interface Servico {
  idServico: number;
  Nome: string;
  Valor: number;
}

const BoxServico = ({ onSelect }: BoxServicoProps) => {
  const [servicos, setServicos] = useState<Servico[]>([]);

  useEffect(() => {
    fetch('/salaoescola/servicos')
      .then(response => response.json())
      .then(data => setServicos(data))
      .catch(error => console.error('Erro ao buscar serviços:', error));
  }, []);

  const handleSelectServicos = (value: string) => {
    const servicoSelecionado = servicos.find(servico => servico.Nome === value);
    if (servicoSelecionado) {
      onSelect(servicoSelecionado);  // Passando o objeto 'Servico' completo para 'onSelect'
    }
  };

    return (
      <>
      <Autocomplete
        disablePortal
        options={servicos}
        getOptionLabel={(option) => option.Nome}  // Acessando 'nome' do serviço
        onChange={(event, newValue) => {
          console.log(event)
          if (newValue) {
            handleSelectServicos(newValue.Nome);  // Passando 'nome' para handleSelect
          }
        }}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Serviço" />}
      />
    </>
  );
  }
  
    const BoxHorario = ({ formData, setFormData }: BoxProps) => {
      return (
        <Autocomplete
          disablePortal
          options={horario}
          getOptionLabel={(option) => option.label}
          sx={{ width: 300 }}
          onChange={(event, newValue) => {
            if (newValue) {
              setFormData((prev) => ({ ...prev, horario: newValue.label })); // Atualiza o horário no estado
            }
          }}
          renderInput={(params) => <TextField {...params} label="Horário" />}
        />
      );
    };

    const BoxPagamento = ({ formData, setFormData }: BoxProps) => {
      return (
        <Autocomplete
          disablePortal
          options={pagamento}
          getOptionLabel={(option) => option.label}
          sx={{ width: 220 }}
          onChange={(event, newValue) => {
            if (newValue) {
              setFormData((prev) => ({
                ...prev,
                metodoPagamento: newValue.label,
              })); // Atualiza o método de pagamento no estado
            }
          }}
          renderInput={(params) => <TextField {...params} label="Método de Pagamento" />}
        />
      );
    };
export { BoxProfissional, BoxServico, BoxHorario, BoxPagamento }