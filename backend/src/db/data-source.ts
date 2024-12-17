import "reflect-metadata";
import { DataSource } from "typeorm";
import { config, dialect } from "../config/db.config";
import { Cliente } from "../model/cliente";
import { Venda } from "../model/venda";
import { SrvAgendamento } from "../model/srvagendamento";
import { Servico } from "../model/servico";
import { Agendamento } from "../model/agendamento";
import { Funcionario } from "../model/funcionario";

export const AppDataSource = new DataSource ({
    type: dialect,
    host: config.HOST,
    port: config.PORT,
    username: config.USER,
    password: config.PASSWORD,
    database: config.DB,
    entities: [Cliente, Venda, Funcionario, Agendamento, Servico, SrvAgendamento],
    synchronize: false,
    logging: false,

});