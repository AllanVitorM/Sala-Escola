import { GlobalStyle } from "./styles";
import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import { Login } from "./pages/Login/login"
import { Cadastro } from "./pages/Cadastro/cadastro";
import { Home } from "./pages/Home/home";
import { Agendar } from "./pages/Agendar/agendar";
import { Historico } from "./pages/Historico/historico";
function App() {
  return(
    <>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/cadastro" element={<Cadastro />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/agendar" element={<Agendar />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
