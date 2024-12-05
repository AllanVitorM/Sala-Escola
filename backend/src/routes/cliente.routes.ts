import { Router } from "express";
import ClienteController from "../controllers/Cliente.controller";


class ClienteRoutes {
     router = Router();
     controller = new ClienteController();
 
    constructor() {
       this.intializeRoutes();
 }
 intializeRoutes() {
        // Criar um novo genero.
       this.router.post("/cadastro", this.controller.create);
        // Retornar os generos já cadastrados.
       this.router.get("/clientes", this.controller.findAll);
       // Retorna um genero específico pelo seu id
       this.router.get("/clientes/:id", this.controller.findOne);
       // Atualizar um genero pelo seu id
       this.router.put("/clientes/:id", this.controller.update);
       // Deleta um genero pelo seu id
       this.router.delete("/clientes/:id", this.controller.delete);
       // Deleta todos os generos
       this.router.delete("/clientes/", this.controller.deleteAll);
    }
}
    export default new ClienteRoutes().router;