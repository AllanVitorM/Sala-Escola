import { Router } from "express";
import FuncionarioController from "../controllers/funcionario.controller";


class FuncionarioRoutes {
     router = Router();
     controller = new FuncionarioController();
 
    constructor() {
       this.intializeRoutes();
 }
 intializeRoutes() {
        // Criar um novo genero.
       this.router.post("/funcionario", this.controller.create);
        // Retornar os generos já cadastrados.
       this.router.get("/funcionarios", this.controller.findAll);
       // Retorna um genero específico pelo seu id
       this.router.get("/funcionario/:id", this.controller.findOne);

       this.router.get("/funcionario/nome/:nome", this.controller.findName);

       // Atualizar um genero pelo seu id
       this.router.put("/funcionario/:id", this.controller.update);
       // Deleta um genero pelo seu id
       this.router.delete("/funcionario/:id", this.controller.delete);
       // Deleta todos os generos
       this.router.delete("/funcionarios", this.controller.deleteAll);
    }
}
    export default new FuncionarioRoutes().router;