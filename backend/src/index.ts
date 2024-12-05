import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import Routes from "./routes/routes";
import { AppDataSource } from "./db/data-source";

export default class Server {

    constructor(app: Application) {
       this.config(app);
       new Routes(app);
   }
   private config(app: Application): void {
           const corsOptions: CorsOptions = {
           origin: "http://localhost:8081"
       };
       app.use(cors(corsOptions));
       app.use(express.json());
       app.use(express.urlencoded({ extended: true }));
   }
}
AppDataSource.initialize()
   .then(() => {
       // here you can start to work with your database
       console.log(`Database is running.`);
        // Inicializa o servidor Express
        const app = express();
        new Server(app);

        const PORT = 8081;
        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });
    })
    .catch((error) => console.log("Erro ao conectar ao banco de dados:", error));
