import { AppDataSource } from "../db/data-source";
import { Agendamento } from "../model/agendamento";


class AgendamentoRepository {
    
    agendamentoRepository = AppDataSource.getRepository(Agendamento);
    

    async save(agendamento: Agendamento): Promise<Agendamento> {
        try {
             // Verificar se os campos obrigatórios estão presentes
            if (!agendamento.Funcionario_idFuncionario || !agendamento.Cliente_idCliente || !agendamento.Status || !agendamento.DataAgenda) {
                throw new Error("Campos obrigatórios faltando: Funcionario, Cliente, Status e DataAgenda");
            }
           return await this.agendamentoRepository.save(agendamento)
        } catch (err) {
            console.log(err)
            throw new Error ("Falha ao cadastrar um Agendamento!");
        }
    }

    async retrieveAll(): Promise<Array<Agendamento>> {
        try {
            return this.agendamentoRepository.find();
        } catch (err) {
            console.log(err)
            throw new Error ("Falha ao retornar os agendamentos");
        }
    }

    async retrieveById(AgendamentoID: number): Promise<Agendamento | null> {
        try {
            return this.agendamentoRepository.findOne({
                where: { idAgendamento: AgendamentoID },
                relations: ["funcionario", "cliente", "srvAgendamentos"], // Carregar vendas associadas
            });
        } catch (err) {
            console.log(err)
            throw new Error("Falha ao buscar agendamento!");
        }
    }

    async update (agendamento: Agendamento) {
        const { Status, DataAgenda } = agendamento;
        try {
            await this.agendamentoRepository.save(agendamento);
            return agendamento;
        } catch (err) {
            console.log(err)
            throw new Error ("Falha ao atualizar agendamento!");
        }
    }

    async delete (AgendamentoID: number): Promise<number> {
        try {
            const AgendamentoEncontrado = await this.agendamentoRepository.findOneBy({
               idAgendamento: AgendamentoID,
            });
            if(AgendamentoEncontrado) {
                this.agendamentoRepository.delete(AgendamentoID);
                return 1;
            }
            return 0;
        } catch (err) {
            console.log(err)
            throw new Error ("Falha ao deletar um agendamento!");
        }
    }
 
    async deleteAll(): Promise<number> {
        try {
            const num = this.agendamentoRepository.query("select count (idAgendamento) from Agendamento;");
            this.agendamentoRepository.query("delete from Agendamento");
            return num;
        } catch (err) {
            console.log(err)
            throw new Error ("Falha ao deletar todos os agendamentos!");
        }
    }


}

export default new AgendamentoRepository();