import { Request, Response } from "express";
import { Cliente } from "../model/cliente";
import ClienteRepositories from "../repository/Cliente.repositories";

export default class ClienteController {

    async create(req: Request, res: Response) {
        if (!req.body.Email) {
            res.status(400).send({
                message: "Email não pode ser vazio."
            });
            return;
        }
        try {
            const cliente: Cliente = req.body;
            const savedCliente = await ClienteRepositories.save(cliente);
            res.status(201).send(savedCliente);

        } catch (err) {
                res.status(500).send({
                message: "Erro ao tentar salvar um Cliente"
            });
        }
    }
    async findAll(req: Request, res: Response) {
        try {
            const clientes = await ClienteRepositories.retrieveAll();
            res.status(200).send(clientes);
        } catch (err) {
            res.status(500).send({
                message: "Erro encontrado ao procurar todos os clientes."
            });
        }
    }

    async findOne(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const cliente = await ClienteRepositories.retrieveById(id);
            if (cliente) res.status(200).send(cliente);
            else
                res.status(404).send({
                    message: `Não foi encontrado nenhum cliente com esse id=${id}.`
                });
        } catch (err) {
            res.status(500).send({
                message: `Error não foi possível retornar o cliente com id=${id}.`
            });
        }
    }

    async update(req: Request, res: Response) {
        let cliente: Cliente = req.body;
        cliente.idCliente = parseInt(req.params.id);
        try {
            await ClienteRepositories.update(cliente);
        } catch (err) {
            res.status(500).send({
                message: `Error ao atualizar o Cliente com id=${cliente}.`
            });
        }
    }

    async delete(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const num = await ClienteRepositories.delete(id);
            if (num == 1) {
                res.send({
                    message: "Cliente deletado com sucesso!"
                });
            } else {
                res.send({
                    message: `Não foi possível deletar o clientee com id=${id}. Talvez o cliente não tenha sido encontrado.`,
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `O cliente com id==${id}, não pode ser deletado.`
            });
        }
    }

    async deleteAll(req: Request, res: Response) {
        try {
            const num = await ClienteRepositories.deleteAll();
            res.send({ message: `${num} Clientes foram deletados com sucesso!` });
        } catch (err) {
            res.status(500).send({
                message: "Algum erro ocorreu enquato deletava todos os clientes."
            });
        }
    }
}