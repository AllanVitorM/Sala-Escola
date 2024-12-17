import { Request, Response } from "express";
import { Servico } from "../model/servico";
import servicoRepostories from "../repository/Servico.repostories";


export default class ServicoController {

    async create(req: Request, res: Response) {
        if (!req.body.Nome || !req.body.Valor) {
            res.status(400).send({
                message: "Nome e Valor são obrigatórios."
            });
            return;
        }
        try {
            const servico: Servico = req.body; 
            const savedServico = await servicoRepostories.save(servico);
            res.status(201).send(savedServico);

        } catch (err) {
                console.log(err)
                res.status(500).send({
                message: "Erro ao tentar criar um serviço"
            });
        }
    }
    async findAll(req: Request, res: Response) {
        try {
            const servicos = await servicoRepostories.retrieveAll();
            res.status(200).send(servicos);
        } catch (err) {
            console.log(err)
            res.status(500).send({
                message: "Erro encontrado ao procurar todos os serviços."
            });
        }
    }

    async findOne(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const servico = await servicoRepostories.retrieveById(id);
            if (servico) res.status(200).send(servico);
            else
                res.status(404).send({
                    message: `Não foi encontrado nenhum serviço com esse id=${id}.`
                });
        } catch (err) {
            console.log(err)
            res.status(500).send({
                message: `Error não foi possível retornar o serviço com id=${id}.`
            });
        }
    }

    async findName(req: Request, res: Response) {
        const nome: string = req.params.nome;

        try {
            const servico = await servicoRepostories.retrieveByNome(nome);
            if (servico) res.status(200).send(servico);
            else
                res.status(404).send({
                    message: `Não foi encontrado nenhum servico com esse nome=${nome}.`
                });
        } catch (err) {
            console.log(err)
            res.status(500).send({
                message: `Error não foi possível retornar o servico com nome=${nome}.`
            });
        }
    }

    async update(req: Request, res: Response) {
        const servico: Servico = req.body;
        servico.idServico = parseInt(req.params.id);
        try {
            await servicoRepostories.update(servico);
        } catch (err) {
            console.log(err)
            res.status(500).send({
                message: `Error ao atualizar o Cliente com id=${servico}.`
            });
        }
    }

    async delete(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const num = await servicoRepostories.delete(id);
            if (num == 1) {
                res.send({
                    message: "Serviço deletado com sucesso!"
                });
            } else {
                res.send({
                    message: `Não foi possível deletar o serviço com id=${id}. Talvez o serviço não tenha sido encontrado.`,
                });
            }
        } catch (err) {
            console.log(err)
            res.status(500).send({
                message: `O serviço com id=${id}, não pode ser deletado.`
            });
        }
    }

    async deleteAll(req: Request, res: Response) {
        try {
            const num = await servicoRepostories.deleteAll();
            res.send({ message: `${num} Serviços foram deletados com sucesso!` });
        } catch (err) {
            console.log(err)
            res.status(500).send({
                message: "Algum erro ocorreu enquato deletava todos os serviços."
            });
        }
    }
}