import { GlobalStyle } from "./styles";
import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import { Login } from "./pages/Login/login"
import { Cadastro } from "./pages/Cadastro/cadastro";


function App() {
  return(
    <>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/cadastro" element={<Cadastro />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App
