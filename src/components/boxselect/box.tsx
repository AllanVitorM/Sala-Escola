
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { funcionario, servico, horario, pagamento } from './styled';


const BoxProfissional = () => {
  return (
    <>
    <Autocomplete
      disablePortal
      options={funcionario}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Profissional" />}
    />
    </>
  );
}

const BoxServico = () => {
    return (
      <>
      <Autocomplete
        disablePortal
        options={servico}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Serviço" />}
      />
      </>
    );
  }
  
  const BoxHorario = () => {
    return (
        <>
        <Autocomplete
          disablePortal
          options={horario}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Horário" />}
        />
        </>
    );
  }

  const BoxPagamento = () => {
    return (
        <>
        <Autocomplete
          disablePortal
          options={pagamento}
          sx={{ width: 220 }}
          renderInput={(params) => <TextField {...params} label="Método de Pagamento" />}
        />
        </>
    );
  }
export { BoxProfissional, BoxServico, BoxHorario, BoxPagamento }