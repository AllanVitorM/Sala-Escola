import { Request, Response, NextFunction } from "express";
import VendaRepositories from "../repository/Venda.repositories";

export default class VendaController {

    async create(req: Request, res: Response) {
        try { 
            const venda = await VendaRepositories.save(req.body);
            res.status(201).send(venda);
        } catch (err) {
                console.log(err)
                res.status(500).send({
                message: "Erro ao tentar salvar uma Venda"
            });
        }
    }
    async findAll(req: Request, res: Response) {
        try {
            const vendas = await VendaRepositories.retrieveAll();
            res.status(200).send(vendas);
        } catch (err) {
            console.log(err)
            res.status(500).send({
                message: "Erro encontrado ao procurar todos os clientes."
            });
        }
    }

    async findOne(req: Request, res: Response, next:NextFunction): Promise<void> {
        try {
            const id = parseInt(req.params.id, 10);
            const venda = await VendaRepositories.retrieveById(id);

            if (!venda) {
                res.status(404).send({
                    message: `Não foi encontrado nenhuma venda com esse id=${id}.`
                });   
            }
                res.status(200).send(venda);
            } catch (err) {
                next(err)
                res.status(500).send({
                message: `Error no servidor`
                });
            }
        }

    async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const vendaAtualizada = await VendaRepositories.update(req.body);
            res.status(200).send(vendaAtualizada)
        } catch (err) {
            next(err)
            res.status(500).send({
                message: `Error ao atualizar uma venda.`
            });
        }
    }

    async delete(req: Request, res: Response) {
       
        try {
            const id = parseInt(req.params.id, 10);
            const result = await VendaRepositories.delete(id);
            if (result == 1) {
                res.send({
                    message: "Venda deletada com sucesso!"
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
            const num = await VendaRepositories.deleteAll();
            res.send({ message: `${num} Vendas foram deletados com sucesso!` });
        } catch (err) {
            console.log(err)
            res.status(500).send({
                message: "Algum erro ocorreu enquato deletava todas as vendas."
            });
        }
    }
}