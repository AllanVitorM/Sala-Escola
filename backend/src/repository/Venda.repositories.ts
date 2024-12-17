import { AppDataSource } from "../db/data-source";
import { Venda } from "../model/venda";

class VendaRepository {
    
    vendaRepository = AppDataSource.getRepository(Venda);

    async save(venda: Venda): Promise<Venda> {
        try {
           return await this.vendaRepository.save(venda)
        } catch (err) {
            console.log(err)
            throw new Error ("Falha ao salvar a venda!");
        }
    }

    async retrieveAll(): Promise<Venda[]> {
        try {
            return this.vendaRepository.find();
        } catch (err) {
            console.log(err)
            throw new Error ("Falha ao retornar todas as vendas!");
        }
    }

    async retrieveById(idVenda: number): Promise<Venda | null> {
        try {
            return this.vendaRepository.findOne({
                where: { idVenda },
                relations: {cliente: true, funcionario: true}, // Carregar vendas associadas
            });
        } catch (err) {
            console.log(err)
            throw new Error("Falha ao buscar uma venda!");
        }
    }

    async update (venda: Venda) {
        const { idVenda, valor, Desconto } = venda;
        try {
            await this.vendaRepository.save(venda);
            return venda;
        } catch (err) {
            console.log(err)
            throw new Error ("Falha ao atualizar uma venda!");
        }
    }

    async delete (idVenda: number): Promise<number> {
        try {
            const vendaExistente = await this.vendaRepository.findOneBy({
               idVenda,
            });
            if(vendaExistente) {
                await this.vendaRepository.delete(idVenda);
                return 1;
            }
            return 0;
        } catch (err) {
            console.log(err)
            throw new Error ("Falha ao deletar uma venda!");
        }
    }
 
    async deleteAll(): Promise<number> {
        try {
            const num = this.vendaRepository.query("select count (idVenda) from Venda;");
            this.vendaRepository.query("delete from Venda");
            return num;
        } catch (err) {
            console.log(err)
            throw new Error ("Falha ao deletar todas as vendas!");
        }
    }


}

export default new VendaRepository();