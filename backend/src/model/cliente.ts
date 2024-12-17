import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Venda } from './venda';
import { Agendamento } from './agendamento';
@Entity()
export class Cliente {
    @PrimaryGeneratedColumn({ type: "int" })
    idCliente?: number;

    @Column({ length: 100, unique: true, nullable: false })
    Email: string;

    @Column({ type: "date", nullable: false })
    DataNasc: Date;

    @Column({ length: 225, nullable: false })
    Senha: string;

    @Column({ length: 45, nullable: false })
    Nome: string;


    @OneToMany(() => Venda, (venda) => venda.cliente, { cascade: true })
    vendas?: Venda[];

    @OneToMany(() => Agendamento, (agendamento) => agendamento.cliente)
    agendamentos!: Agendamento[];

    constructor(
        Email: string, 
        DataNasc: Date, 
        Senha: string, 
        Nome: string,
        vendas?: Venda[],
        agendamentos?: Agendamento[]
        ) {
        this.Email = Email;
        this.DataNasc = DataNasc;
        this.Senha = Senha;
        this.Nome = Nome;
        if(vendas) this.vendas = vendas;
        if(agendamentos) this.agendamentos = agendamentos;
    }
}