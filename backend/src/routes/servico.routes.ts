import { Router } from "express";
import ServicoController from "../controllers/servico.controller";


class ServicosRoutes {
     router = Router();
     controller = new ServicoController();
 
    constructor() {
       this.intializeRoutes();
 }
 intializeRoutes() {
        // Criar um novo genero.
       this.router.post("/servico", this.controller.create);
        // Retornar os generos já cadastrados.
       this.router.get("/servicos", this.controller.findAll);
       // Retorna um genero específico pelo seu id
       this.router.get("/servico/:id", this.controller.findOne);
       
       this.router.get("/servico/nome/:nome", this.controller.findName);
       // Atualizar um genero pelo seu id
       this.router.put("/servico/:id", this.controller.update);
       // Deleta um genero pelo seu id
       this.router.delete("/servico/:id", this.controller.delete);
       // Deleta todos os generos
       this.router.delete("/servicos", this.controller.deleteAll);
       
    }
}
    export default new ServicosRoutes().router;