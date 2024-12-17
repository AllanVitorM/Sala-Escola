import { AppDataSource } from "../db/data-source";
import { Funcionario } from "../model/funcionario";


class FuncionarioRepository {
    
    funcionarioRepository = AppDataSource.getRepository(Funcionario);
    

    async save(funcionario: Funcionario): Promise<Funcionario> {
        try {
           return await this.funcionarioRepository.save(funcionario)
        } catch (err) {
            console.log(err)
            throw new Error ("Falha ao cadastrar funcionário!");
        }
    }

    async retrieveAll(): Promise<Array<Funcionario>> {
        try {
            return this.funcionarioRepository.find();
        } catch (err) {
            console.log(err)
            throw new Error ("Falha ao retornar os funcionários");
        }
    }

    async retrieveById(FuncionarioId: number): Promise<Funcionario | null> {
        try {
            return this.funcionarioRepository.findOne({
                where: { idFuncionario: FuncionarioId },
                relations: ["vendas"], // Carregar vendas associadas
            });
        } catch (err) {
            console.log(err)
            throw new Error("Falha ao buscar Funcionário!");
        }
    }

    async retrieveByNome(n: string): Promise<Funcionario | null> {
            try {
                return this.funcionarioRepository.findOneBy({
                    Nome: n,
                });
            } catch (error) {
                console.log(error)
                throw new Error("Falha ao buscar o nome do funcionário!");
            }
        }

    async update (funcionario: Funcionario) {
        const { Nome, Cargo, CargaHoraria, Salario  } = funcionario;
        try {
            await this.funcionarioRepository.save(funcionario);
            return funcionario;
        } catch (err) {
            console.log(err)
            throw new Error ("Falha ao atualizar Funcionário!");
        }
    }

    async delete (FuncionarioId: number): Promise<number> {
        try {
            const FuncionarioEncontrado = await this.funcionarioRepository.findOneBy({
               idFuncionario: FuncionarioId,
            });
            if(FuncionarioEncontrado) {
                this.funcionarioRepository.delete(FuncionarioId);
                return 1;
            }
            return 0;
        } catch (err) {
            console.log(err)
            throw new Error ("Falha ao deletar funcionário!");
        }
    }
 
    async deleteAll(): Promise<number> {
        try {
            const num = this.funcionarioRepository.query("select count (idFuncionario) from Funcionario;");
            this.funcionarioRepository.query("delete from Funcionario");
            return num;
        } catch (err) {
            console.log(err)
            throw new Error ("Falha ao deletar todos os funcionários!");
        }
    }


}

export default new FuncionarioRepository();