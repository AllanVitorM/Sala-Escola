import { AppDataSource } from "../db/data-source";
import { Cliente } from "../model/cliente";
import { Venda } from "../model/venda";

class ClienteRepository {
    
    clienteRepository = AppDataSource.getRepository(Cliente);
    vendaRepository = AppDataSource.getRepository(Venda);

    async save(cliente: Cliente): Promise<Cliente> {
        try {
           return await this.clienteRepository.save(cliente)
        } catch (err) {
            console.log(err)
            throw new Error ("Falha ao cadastrar usuário!");
        }
    }

    async retrieveAll(): Promise<Array<Cliente>> {
        try {
            return this.clienteRepository.find();
        } catch (err) {
            console.log(err)
            throw new Error ("Falha ao retornar os usuários");
        }
    }

    async retrieveById(ClienteId: number): Promise<Cliente | null> {
        try {
            return this.clienteRepository.findOne({
                where: { idCliente: ClienteId },
                relations: ["vendas"], // Carregar vendas associadas
            });
        } catch (err) {
            console.log(err)
            throw new Error("Falha ao buscar usuário!");
        }
    }

    // No ClienteRepository
    async findOneByEmail(Email: string): Promise<Cliente | null> {
        return this.clienteRepository.findOne({ 
            where: { Email },
            relations: ["vendas"],
        });
    }


    async update (cliente: Cliente) {
        const { idCliente, Nome, Senha } = cliente;
        try {
            await this.clienteRepository.save(cliente);
            return cliente;
        } catch (err) {
            console.log(err)
            throw new Error ("Falha ao atualizar usuário!");
        }
    }

    async delete (ClienteId: number): Promise<number> {
        try {
            const ClienteEncontrado = await this.clienteRepository.findOneBy({
               idCliente: ClienteId ,
            });
            if(ClienteEncontrado) {
                this.clienteRepository.delete(ClienteId);
                return 1;
            }
            return 0;
        } catch (err) {
            console.log(err)
            throw new Error ("Falha ao deletar usuário!");
        }
    }
 
    async deleteAll(): Promise<number> {
        try {
            const num = this.clienteRepository.query("select count (idCliente) from Cliente;");
            this.clienteRepository.query("delete from Cliente");
            return num;
        } catch (err) {
            console.log(err)
            throw new Error ("Falha ao deletar todos os usuários!");
        }
    }


}

export default new ClienteRepository();