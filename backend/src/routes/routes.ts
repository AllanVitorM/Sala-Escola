import { Application } from "express";
import homeRoutes from "./home.routes";
import clienteRoutes from "./cliente.routes";
import vendaRoutes from "./venda.routes";
import servicoRoutes from "./servico.routes"
import agendamentoRoutes from "./agendamento.routes";
import funcionarioRoutes from "./funcionario.routes";
import SrvAgendamentosRoutes from "./SrvAgendamentos.routes";

export default class Routes {
    constructor(app: Application) {
        app.use("/salaoescola", homeRoutes);
        app.use("/salaoescola", clienteRoutes);
        app.use("/salaoescola", vendaRoutes);
        app.use("/salaoescola", servicoRoutes);
        app.use("/salaoescola", agendamentoRoutes);
        app.use("/salaoescola", funcionarioRoutes);
        app.use("/salaoescola", SrvAgendamentosRoutes);
    }
}