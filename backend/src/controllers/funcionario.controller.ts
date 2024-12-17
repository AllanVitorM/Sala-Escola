import { Request, Response } from "express";
import { Funcionario } from "../model/funcionario";
import FuncionarioRepositories from "../repository/Funcionario.repositories";

export default class FuncionarioController {

    async create(req: Request, res: Response) {
        if (!req.body.Cargo) {
            res.status(400).send({
                message: "O cargo é obrigatório."
            });
            return;
        }
        try {
            const funcionario: Funcionario = req.body; 
            const savedfuncionario = await FuncionarioRepositories.save(funcionario);
            res.status(201).send(savedfuncionario);

        } catch (err) {
                console.log(err)
                res.status(500).send({
                message: "Erro ao tentar salvar um funcionário"
            });
        }
    }
    async findAll(req: Request, res: Response) {
        try {
            const funcionarios = await FuncionarioRepositories.retrieveAll();
            res.status(200).send(funcionarios);
        } catch (err) {
            console.log(err)
            res.status(500).send({
                message: "Erro encontrado ao procurar todos os funcionários."
            });
        }
    }

    async findOne(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const funcionario = await FuncionarioRepositories.retrieveById(id);
            if (funcionario) res.status(200).send(funcionario);
            else
                res.status(404).send({
                    message: `Não foi encontrado nenhum funcionário com esse id=${id}.`
                });
        } catch (err) {
            console.log(err)
            res.status(500).send({
                message: `Error não foi possível retornar o funcionario com id=${id}.`
            });
        }
    }

    async findName(req: Request, res: Response) {
            const nome: string = req.params.nome;
    
            try {
                const servico = await FuncionarioRepositories.retrieveByNome(nome);
                if (servico) res.status(200).send(servico);
                else
                    res.status(404).send({
                        message: `Não foi encontrado nenhum funcionário com esse nome=${nome}.`
                    });
            } catch (err) {
                console.log(err)
                res.status(500).send({
                    message: `Error não foi possível retornar o funcionário com nome=${nome}.`
                });
            }
        }

    async update(req: Request, res: Response) {
        const funcionario: Funcionario = req.body;
        funcionario.idFuncionario = parseInt(req.params.id);
        try {
            await FuncionarioRepositories.update(funcionario);
        } catch (err) {
            console.log(err)
            res.status(500).send({
                message: `Error ao atualizar o funcionário com id=${funcionario}.`
            });
        }
    }

    async delete(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const num = await FuncionarioRepositories.delete(id);
            if (num == 1) {
                res.send({
                    message: "Funcionário deletado com sucesso!"
                });
            } else {
                res.send({
                    message: `Não foi possível deletar o funcionário com id=${id}. Talvez o funcionário não tenha sido encontrado.`,
                });
            }
        } catch (err) {
            console.log(err)
            res.status(500).send({
                message: `O funcionário com id=${id}, não pode ser deletado.`
            });
        }
    }

    async deleteAll(req: Request, res: Response) {
        try {
            const num = await FuncionarioRepositories.deleteAll();
            res.send({ message: `${num} funcionários foram deletados com sucesso!` });
        } catch (err) {
            console.log(err)
            res.status(500).send({
                message: "Algum erro ocorreu enquato deletava todos os funcionários."
            });
        }
    }
}