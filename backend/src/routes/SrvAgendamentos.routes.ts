import { Router } from "express";
import SrvAgendamentoController from "../controllers/srvAgendamento.controller";

class SrvAgendamentoRoutes {
  router = Router();
  controller = new SrvAgendamentoController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.post("/srvagendamento", this.controller.create);
    this.router.get("/srvagendamentos/agendamento/:id", this.controller.findOne);
    this.router.get("/srvagendamento/servico/:id", this.controller.findByServico);
    this.router.put("/srvagendamento/:id", this.controller.update);
    this.router.delete("/srvagendamentos", this.controller.delete);
  }
}

export default new SrvAgendamentoRoutes().router;
