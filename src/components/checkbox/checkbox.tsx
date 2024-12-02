
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const Checkboxlabel = () => {
    return(
       <FormControlLabel required control={<Checkbox />} label="Eu aceito os Termos de uso e Condições"/>
    )
}

export { Checkboxlabel }