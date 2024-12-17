import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
  } from "typeorm";
  import { Agendamento } from "./agendamento";
  import { Venda } from "./venda";
  
  @Entity()
  export class Funcionario {
    @PrimaryGeneratedColumn()
    idFuncionario!: number;
  
    @Column({ type: "varchar", length: 45, nullable: false })
    Nome: string;
  
    @Column({ type: "datetime", nullable: false })
    DataNasc: Date;
  
    @Column({ type: "varchar", length: 45, nullable: false })
    Cargo: string;
  
    @Column({ type: "decimal", precision: 7, scale: 2, nullable: false })
    Salario: number;
  
    @Column({ type: "varchar", length: 45, nullable: false })
    CargaHoraria: string;
  
  
    @OneToMany(() => Agendamento, (agendamento) => agendamento.funcionario)
    agendamentos!: Agendamento[];
  
    @OneToMany(() => Venda, (venda) => venda.funcionario)
    vendas!: Venda[];

    constructor(
        Nome: string,
        DataNasc: Date,
        Cargo: string,
        Salario: number,
        CargaHoraria: string,
        id?: number,
        agendamentos?: Agendamento[],
        vendas?: Venda[]
      ) {
        this.Nome = Nome;
        this.DataNasc = DataNasc;
        this.Cargo = Cargo;
        this.Salario = Salario;
        this.CargaHoraria = CargaHoraria;
        if(id) this.idFuncionario = id;
        if(agendamentos) this.agendamentos = agendamentos; // Inicializa como um array vazio.
        if(vendas) this.vendas = vendas;
      }
  }
  