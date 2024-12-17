import { Request, Response } from "express";
import AgendamentoRepositories from "../repository/Agendamento.repositories";

export default class AgendamentoController {

    async create(req: Request, res: Response): Promise<void> {
        try { 
            console.log("há uma requisição aqui?", req.body);
            const { Funcionario_idFuncionario, Cliente_idCliente, Status, DataAgenda } = req.body;

            // Validar se todos os campos necessários estão presentes
            if (!Funcionario_idFuncionario || !Cliente_idCliente || !Status || !DataAgenda) {
                    res.status(400).send({
                    message: "Todos os campos obrigatórios devem ser preenchidos: Funcionario, Cliente, Status e DataAgenda.",
                });
            }

            console.log("Dados recebidos:", req.body);

            const agenda = await AgendamentoRepositories.save(req.body);
            res.status(201).send(agenda);
        } catch (err) {
                console.log(err)
                res.status(500).send({
                message: "Erro ao tentar salvar um agendamento"
            });
        }
    }
    async findAll(req: Request, res: Response) {
        try {
            const agendas = await AgendamentoRepositories.retrieveAll();
            res.status(200).send(agendas);
        } catch (err) {
            console.log(err)
            res.status(500).send({
                message: "Erro encontrado ao procurar todos os agendamentos."
            });
        }
    }

    async findOne(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id, 10);
            const agenda = await AgendamentoRepositories.retrieveById(id);

            if (!agenda) {
                res.status(404).send({
                    message: `Não foi encontrado nenhum agendamento com esse id=${id}.`
                });   
            }
                res.status(200).send(agenda);
            } catch (err) {
                console.log(err)
                res.status(500).send({
                message: `Error no servidor`
                });
            }
        }

    async update(req: Request, res: Response): Promise<void> {
        try {
            const agendamentoAtualizado = await AgendamentoRepositories.update(req.body);
            res.status(200).send(agendamentoAtualizado)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                message: `Error ao atualizar um agendamento.`
            });
        }
    }

    async delete(req: Request, res: Response) {
       
        try {
            const id = parseInt(req.params.id, 10);
            const result = await AgendamentoRepositories.delete(id);
            if (result == 1) {
                res.send({
                    message: "Agendamento deletado com sucesso!"
                });
            } else {
                res.send({
                    message: `Não foi possível deletar uma venda com id=${id}. Talvez a venda não tenha sido encontrada.`,
                });
            }
        } catch (err) {
            console.log(err)
            res.status(500).send({
                message: `A venda não pode ser deletada.`
            });
        }
    }

    async deleteAll(req: Request, res: Response) {
        try {
            const num = await AgendamentoRepositories.deleteAll();
            res.send({ message: `${num} Vendas foram deletados com sucesso!` });
        } catch (err) {
            console.log(err)
            res.status(500).send({
                message: "Algum erro ocorreu enquato deletava todas as vendas."
            });
        }
    }
}