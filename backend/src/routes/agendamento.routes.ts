import { Router } from "express";
import AgendamentoController from "../controllers/agendamento.controller";


class AgendamentoRoutes {
     router = Router();
     controller = new AgendamentoController();
 
    constructor() {
       this.intializeRoutes();
 }
 intializeRoutes() {
        // Criar um novo genero.
       this.router.post("/agendamento", this.controller.create);
        // Retornar os generos já cadastrados.
       this.router.get("/agendamentos", this.controller.findAll);
       // Retorna um genero específico pelo seu id
       this.router.get("/agendamento/:id", this.controller.findOne);
       // Atualizar um genero pelo seu id
       this.router.put("/agendamento/:id", this.controller.update);
       // Deleta um genero pelo seu id
       this.router.delete("/agendamento/:id", this.controller.delete);
       // Deleta todos os generos
       this.router.delete("/agendamentos", this.controller.deleteAll);
    }
}
    export default new AgendamentoRoutes().router;