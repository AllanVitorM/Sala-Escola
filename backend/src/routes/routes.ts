import { Application } from "express";
import homeRoutes from "./home.routes";
import clienteRoutes from "./cliente.routes";

export default class Routes {
    constructor(app: Application) {
        app.use("/salaoescola", homeRoutes);
        app.use("/salaoescola", clienteRoutes);
    }
}