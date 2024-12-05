import { AppDataSource } from "../db/data-source";
import { Cliente } from "../model/cliente";

class ClienteRepository {
    
    clienteRepository = AppDataSource.getRepository(Cliente);

    async save(cliente: Cliente): Promise<Cliente> {
        try {
           return await this.clienteRepository.save(cliente)
        } catch (err) {
            throw new Error ("Falha ao cadastrar usuário!");
        }
    }

    async retrieveAll(): Promise<Array<Cliente>> {
        try {
            return this.clienteRepository.find();
        } catch (err) {
            throw new Error ("Falha ao retornar os usuários");
        }
    }

    async retrieveById(ClienteId: number): Promise<Cliente | null> {
        try {
            return this.clienteRepository.findOneBy({
                idCliente: ClienteId,
            });
        } catch (err) {
            throw new Error("Falha ao buscar usuário!");
        }
    }

    async update (cliente: Cliente) {
        const { idCliente, Nome, Senha } = cliente;
        try {
            this.clienteRepository.save(cliente);
            return cliente;
        } catch (error) {
            throw new Error ("Falha ao atualizar usuário!");
        }
    }

    async delete (ClientId: number): Promise<number> {
        try {
            const ClienteEncontrado = await this.clienteRepository.findOneBy({
                idCliente: ClientId,
            });
            if(ClienteEncontrado) {
                this.clienteRepository.remove(ClienteEncontrado);
                return 1;
            }
            return 0;
        } catch (error) {
            throw new Error ("Falha ao deletar usuário!");
        }
    }

    async deleteAll(): Promise<number> {
        try {
            let num = this.clienteRepository.query("select count (idCliente) from Cliente;");
            this.clienteRepository.query("delete from Cliente");
            return num;
        } catch (error) {
            throw new Error ("Falha ao deletar todos os usuários!");
        }
    }


}

export default new ClienteRepository();