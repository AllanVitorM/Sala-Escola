import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import  React, {useState}  from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

interface BoxProps {
    label: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    width?: string;
    value?: string;
}

interface DateInputProps {
    label: string;
    value: Dayjs | null;
    onChange: (newValue: Dayjs | null) => void;
    width?: string;
  }
  

const InputEmail: React.FC<BoxProps> = ({label, onChange, width}) => {

    return(
            <Box
                className="box"
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: {width} } }}
                noValidate
>

                <TextField id="email-input" label={label} 
                    variant="outlined" type='email' 
                    autoComplete="username" onChange={onChange} 
                    InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <EmailIcon />
                          </InputAdornment>
                        ),
                      }}/>
            </Box> 

    )
}

const InputPassword: React.FC<BoxProps> = ({label, onChange}) => {
    
    const [showPassword, setShowPassword] = useState(false);

    // Função para alternar o estado de visibilidade
    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return(
        <Box
            className="box"
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '60ch' } }}
            noValidate>
            <TextField
                id="username-password"
                label={label}
                variant="outlined"
                type="text"
                autoComplete="username" // Pode ser útil para leitores de tela.
                onChange={onChange}
                sx={{ display: 'none' }}
            />
            <TextField
                id="password-input"
                label={label}
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                variant="outlined" 
                onChange={onChange}
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={togglePasswordVisibility}
                          edge="end"
                          aria-label="toggle password visibility"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}/>
                
        </Box>
)}

const InputConfirmarEmail: React.FC<BoxProps> = ({label, onChange}) => {

    return(
            <Box
                className="box"
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '60ch' } }}
                noValidate>

                <TextField id="conf-email" 
                label={label} 
                variant="outlined" 
                type='email' 
                autoComplete="username" 
                onChange={onChange}
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }} />
            </Box> 

    )
}


const InputConfirmarPassword: React.FC<BoxProps> = ({label, onChange}) => {
    
    const [showPassword, setShowPassword] = useState(false);

    // Função para alternar o estado de visibilidade
    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };


    return(
        <Box
            className="box"
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '60ch' } }}
            noValidate>
            <TextField
                id="username-ConfirmPass"
                label={label}
                variant="outlined"
                type="text"
                autoComplete="username" // Pode ser útil para leitores de tela.
                onChange={onChange}
                sx={{ display: 'none' }}
            />
            <TextField
                id="password-input"
                label={label}
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                variant="outlined" 
                onChange={onChange}
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={togglePasswordVisibility}
                          edge="end"
                          aria-label="toggle password visibility"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}/>
                
        </Box>
)}

const InputName: React.FC<BoxProps> = ({label, onChange, width}) => {
    return(
            <Box
            className="box"
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: {width} } }}
            noValidate
            autoComplete="Name">

            <TextField id="outlined-basicName" 
                label={label} 
                variant="outlined" 
                type='text' 
                onChange={onChange}
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}/>
            </Box> 

    )
}

const DateInput: React.FC<DateInputProps> = ({label, value, onChange, width}) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{
          width: {width},
          m: 1,
          display: 'flex',
        }}>
            <DatePicker label={label} value={value} onChange={onChange}/>
        </Box>
      </LocalizationProvider>
    );
}

const CommentInput: React.FC<BoxProps> = ({label}) => {
  return(
    <Box component="form"
    sx={{ '& .MuiTextField-root': { m: 3, width: '50ch' }, 
    display: 'flex', 
    justifyContent:'center', 
    alignItems:'center' }}
    noValidate
    autoComplete="off"
  >
    <TextField
          id="outlined-multiline-static"
          label={label}
          multiline
          maxRows={4}
          defaultValue=""
          sx={{
            width: "100%", // Define a largura
            height: "100px", // Altura fixa para a caixa
            '& .MuiInputBase-root': {
              height: "100%", // Garante que o conteúdo preencha toda a altura
            },
          }}
        />

    </Box>
  )
}


export { InputEmail, InputConfirmarEmail ,InputPassword, InputConfirmarPassword, InputName, DateInput, CommentInput }