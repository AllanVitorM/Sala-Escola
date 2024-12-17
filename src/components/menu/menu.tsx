import { MenuLateral } from "./styled";
import { MenuButton } from "../button/button";
import { Stack } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HistoryIcon from '@mui/icons-material/History';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';


interface MenuProps {
    height?: string;
}

const Menu: React.FC<MenuProps> = ({height}) => {

    const navigate = useNavigate();

    const handleClicklogout = () => {
        navigate('/')
    }

    const handleClickHome = () => {
        navigate('/home')
    }
    
    const handleClickAgendar = () => {
        navigate('/agendar')
    }

    const handleClickHistorico = () => {
        navigate('/historico')
    }

    return(
        <MenuLateral height={height}>
            <MenuButton title="Início" onClick={handleClickHome} to="/home">
                <Stack direction="row" spacing={1}>
                    <HomeIcon fontSize='medium'/>
                </Stack>
            </MenuButton>
            <MenuButton title="Agendar" onClick={handleClickAgendar} to="/agendar">
                <Stack direction="row" spacing={1}>
                    <CalendarMonthIcon fontSize='medium'/>
                </Stack>
            </MenuButton>
            <MenuButton title="Histórico" onClick={handleClickHistorico} to="/historico">
                <Stack direction="row" spacing={1}>
                    <HistoryIcon fontSize='medium'/>
                </Stack>
            </MenuButton>
            <MenuButton title="Ajuda">
                <Stack direction="row" spacing={1}>
                    <HelpIcon fontSize='medium'/>
                </Stack>
            </MenuButton>
            <MenuButton title="Configurações">
                <Stack direction="row" spacing={1}>
                    <SettingsIcon fontSize='medium'/>
                </Stack>
            </MenuButton>
            <MenuButton title="Sair" onClick={handleClicklogout}>
                <Stack direction="row" spacing={1}>
                    <LogoutIcon fontSize='medium'/>
                </Stack>
            </MenuButton>
        </MenuLateral>
    )
}

export { Menu }