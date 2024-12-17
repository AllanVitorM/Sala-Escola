import { Request, Response, RequestHandler } from "express";
import { Cliente } from "../model/cliente";
import ClienteRepositories from "../repository/Cliente.repositories";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config(); 

export default class ClienteController {

        login: RequestHandler = async (req: Request, res: Response): Promise<void> => {
        const { Email, Senha } = req.body;
      
        try {
          // Busque o cliente pelo email
          const cliente = await ClienteRepositories.findOneByEmail(Email);
      
          if (!cliente) {
            res.status(404).send({ message: 'Usuário não encontrado' });
            return;
          }
      
          // Verifique a senha
          const senhaValida = await bcrypt.compare(Senha, cliente.Senha);
          if (!senhaValida) {
            res.status(401).send({ message: 'Senha incorreta' });
            return;
          }
      
          // Gere o token JWT
          const payload = { 
            idCliente: cliente.idCliente,  // Garanta que o idCliente esteja presente aqui
            Email: cliente.Email           // E-mail pode ser opcional, dependendo da sua necessidade
          };
      
          const token = jwt.sign(payload, process.env.JWT_SECRET || 'seu_segredo', { expiresIn: '1h' });
      
          // Enviar o token de volta para o cliente
          res.status(200).send({ token });
          return;
        } catch (err) {
          console.error(err);
          res.status(500).send({ message: 'Erro ao tentar realizar o login' });
          return;
        }
      };

    async create(req: Request, res: Response) {
        if (!req.body.Email || !req.body.Senha) {
            res.status(400).send({
                message: "Email e Senha são obrigatórios."
            });
            return;
        }
        try {
            const cliente: Cliente = req.body;
            const salt = await bcrypt.genSalt(10);
            cliente.Senha = await bcrypt.hash(cliente.Senha, salt); 
            const savedCliente = await ClienteRepositories.save(cliente);
            res.status(201).send(savedCliente);

        } catch (err) {
                console.log(err)
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
            console.log(err)
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
            console.log(err)
            res.status(500).send({
                message: `Error não foi possível retornar o cliente com id=${id}.`
            });
        }
    }

    async update(req: Request, res: Response) {
        const cliente: Cliente = req.body;
        cliente.idCliente = parseInt(req.params.id);
        try {
            await ClienteRepositories.update(cliente);
        } catch (err) {
            console.log(err)
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
            console.log(err)
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
            console.log(err)
            res.status(500).send({
                message: "Algum erro ocorreu enquato deletava todos os clientes."
            });
        }
    }
}