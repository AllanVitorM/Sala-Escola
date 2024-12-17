import { AppDataSource } from "../db/data-source";
import { Servico } from "../model/servico";

class ServicoRepository {
    
    servicoRepository = AppDataSource.getRepository(Servico);

    async save(servico: Servico): Promise<Servico> {
        try {
           return await this.servicoRepository.save(servico)
        } catch (err) {
            console.log(err)
            throw new Error ("Falha ao salvar um Serviço!");
        }
    }

    async retrieveAll(): Promise<Servico[]> {
        try {
            return this.servicoRepository.find();
        } catch (err) {
            console.log(err)
            throw new Error ("Falha ao retornar todos os serviços!");
        }
    }

    async retrieveById(ServicoId: number): Promise<Servico | null> {
        try {
            return this.servicoRepository.findOne({
                where: { idServico: ServicoId  },
                relations: {srvAgendamentos: true}, // Carregar servicos associadas
            });
        } catch (err) {
            console.log(err)
            throw new Error("Falha ao buscar uma serviço!");
        }
    }

    async retrieveByNome(n: string): Promise<Servico | null> {
        try {
            return this.servicoRepository.findOneBy({
                Nome: n,
            });
        } catch (error) {
            console.log(error)
            throw new Error("Falha ao buscar o nome do serviço!");
        }
    }

    async update (servico: Servico) {
        const { Nome, Valor, quantidade } = servico;
        try {
            await this.servicoRepository.save(servico);
            return servico;
        } catch (err) {
            console.log(err)
            throw new Error ("Falha ao atualizar um serviço!");
        }
    }

    async delete (ServicoId: number): Promise<number> {
        try {
            const servicoExistente = await this.servicoRepository.findOneBy({
               idServico: ServicoId,
            });
            if(servicoExistente) {
                await this.servicoRepository.delete(ServicoId);
                return 1;
            }
            return 0;
        } catch (err) {
            console.log(err)
            throw new Error ("Falha ao deletar uma serviço!");
        }
    }
 
    async deleteAll(): Promise<number> {
        try {
            const num = this.servicoRepository.query("select count (idServico) from servico;");
            this.servicoRepository.query("delete from servico");
            return num;
        } catch (err) {
            console.log(err)
            throw new Error ("Falha ao deletar todas as serviços!");
        }
    }
}

export default new ServicoRepository();