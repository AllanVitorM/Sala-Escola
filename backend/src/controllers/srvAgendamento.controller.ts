import { Request, Response, NextFunction } from "express";
import SrvAgendamentoRepository from "../repository/SrvAgendamento.repositories";

export default class SrvAgendamentoController {
  // Criar um novo registro
  async create (req: Request, res: Response): Promise<void> {
    const { servicoId, agendamentoId, funcionarioId, clienteId, quantidade } = req.body;

    try {
      const novoSrvAgendamento = await SrvAgendamentoRepository.save(
        servicoId,
        agendamentoId,
        funcionarioId,
        clienteId,
        quantidade
      );

      res.status(201).json(novoSrvAgendamento);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

  // Buscar serviços associados a um agendamento
  async findOne (req: Request, res: Response, next:NextFunction): Promise<void>  {
    const { agendamentoId } = req.params;

    try {
      const agendamentos = await SrvAgendamentoRepository.RetrieveById(Number(agendamentoId));

       res.status(200).json(agendamentos);
    } catch (err) {
      next(err)
       res.status(500).json({ message: err });
    }
  };

  // Buscar agendamentos associados a um serviço
    async findByServico  (req: Request, res: Response, next:NextFunction): Promise<void>  {
    const { servicoId } = req.params;

    try {
      const servicos = await SrvAgendamentoRepository.RetrieveByIdservico(Number(servicoId));

      res.status(200).json(servicos);
    } catch (err) {
      next(err)
      res.status(500).json({ message: err });
    }
  };

  // Atualizar a quantidade de um serviço em um agendamento
    async update (req: Request, res: Response, next:NextFunction): Promise<void> {
    const { servicoId, agendamentoId, funcionarioId, clienteId, novaQuantidade } = req.body;

    try {
      const atualizado = await SrvAgendamentoRepository.update(
        servicoId,
        agendamentoId,
        funcionarioId,
        clienteId,
        novaQuantidade
      );

      res.status(200).json(atualizado);
    } catch (err) {
      next(err)
      res.status(500).json({ message: err });
    }
  };

  // Remover um registro da tabela
    async delete  (req: Request, res: Response, next:NextFunction): Promise<void> {
    const { servicoId, agendamentoId, funcionarioId, clienteId } = req.body;

    try {
      await SrvAgendamentoRepository.delete(
        servicoId,
        agendamentoId,
        funcionarioId,
        clienteId
      );

      res.status(204).send();
    } catch (err) {
      next(err)
      res.status(500).json({ message: err });
    }
  };
}
