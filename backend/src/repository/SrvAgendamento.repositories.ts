import { AppDataSource } from "../db/data-source";
import { SrvAgendamento } from "../model/srvagendamento";


class SrvAgendamentoRepository {
    
    srvAgendamentoRepository = AppDataSource.getRepository(SrvAgendamento);
  // Criar um novo registro na tabela SrvAgendamento
  async save(
    servicoId: number,
    agendamentoId: number,
    funcionarioId: number,
    clienteId: number,
    quantidade?: number
  ): Promise<SrvAgendamento> {
    const novoSrvAgendamento = this.srvAgendamentoRepository.create  ({
      Servico_idServico: servicoId,
      Agendamento_idAgendamento: agendamentoId,
      Agendamento_Funcionario_idFuncionario: funcionarioId,
      Agendamento_Cliente_idCliente: clienteId,
      quantidade,
    });

    return await this.srvAgendamentoRepository.save(novoSrvAgendamento);
  }

  // Buscar todos os serviços associados a um agendamento
  async RetrieveById(agendamentoId: number): Promise<SrvAgendamento | null> {
    return await this.srvAgendamentoRepository.findOne({
      where: { Agendamento_idAgendamento: agendamentoId },
      relations: ["servico", "agendamento"],
    });
  }

  // Buscar todos os agendamentos associados a um serviço específico
  async RetrieveByIdservico(servicoId: number): Promise<SrvAgendamento | null> {
    return await this.srvAgendamentoRepository.findOne({
      where: { Servico_idServico: servicoId },
      relations: ["servico", "agendamento"],
    });
  }

  // Atualizar a quantidade de serviços em um agendamento específico
  async update(
    servicoId: number,
    agendamentoId: number,
    funcionarioId: number,
    clienteId: number,
    novaQuantidade: number
  ): Promise<SrvAgendamento> {
    const srvAgendamento = await this.srvAgendamentoRepository.findOne({
      where: {
        Servico_idServico: servicoId,
        Agendamento_idAgendamento: agendamentoId,
        Agendamento_Funcionario_idFuncionario: funcionarioId,
        Agendamento_Cliente_idCliente: clienteId,
      },
    });

    if (!srvAgendamento) {
      throw new Error("SrvAgendamento não encontrado.");
    }

    srvAgendamento.quantidade = novaQuantidade;

    return await this.srvAgendamentoRepository.save(srvAgendamento);
  }

  // Remover um registro da tabela SrvAgendamento
  async delete(
    servicoId: number,
    agendamentoId: number,
    funcionarioId: number,
    clienteId: number
  ): Promise<void> {
    const srvAgendamento = await this.srvAgendamentoRepository.findOne({
      where: {
        Servico_idServico: servicoId,
        Agendamento_idAgendamento: agendamentoId,
        Agendamento_Funcionario_idFuncionario: funcionarioId,
        Agendamento_Cliente_idCliente: clienteId,
      },
    });

    if (!srvAgendamento) {
      throw new Error("SrvAgendamento não encontrado.");
    }

    await this.srvAgendamentoRepository.remove(srvAgendamento);
  }
}


export default new SrvAgendamentoRepository();