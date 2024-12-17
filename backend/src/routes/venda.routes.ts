import { Router } from "express";
import VendaController from "../controllers/venda.controller";


class VendasRoutes {
     router = Router();
     controller = new VendaController();
 
    constructor() {
       this.intializeRoutes();
 }
 intializeRoutes() {
        // Criar um novo genero.
       this.router.post("/venda", this.controller.create);
        // Retornar os generos já cadastrados.
       this.router.get("/vendas", this.controller.findAll);
       // Retorna um genero específico pelo seu id
       this.router.get("/venda/:id", this.controller.findOne);
       // Atualizar um genero pelo seu id
       this.router.put("/venda/:id", this.controller.update);
       // Deleta um genero pelo seu id
       this.router.delete("/vendas/:id", this.controller.delete);
       // Deleta todos os generos
       this.router.delete("/vendas", this.controller.deleteAll);
       
    }
}
    export default new VendasRoutes().router;