import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
  } from "typeorm";
import { SrvAgendamento } from "./srvagendamento"
  
  @Entity("Servico")
  export class Servico {
    @PrimaryGeneratedColumn()
    idServico!: number;
  
    @Column({ type: "varchar", length: 45, nullable: false })
    Nome: string;
  
    @Column({ type: "decimal", precision: 6, scale: 2, nullable: false })
    Valor: number;
  
    @Column({ type: "int", nullable: false })
    quantidade: number;
  
    @Column({ type: "varchar", length: 45, nullable: true })
    descricao?: string | null;
  
    @OneToMany(() => SrvAgendamento, (srvAgendamento) => srvAgendamento.servico)
    srvAgendamentos!: SrvAgendamento;

    constructor(
        Nome: string,
        Valor: number,
        quantidade: number,
        descricao?: string,
        id?: number
      ) {
        this.Nome = Nome;
        this.Valor = Valor;
        this.quantidade = quantidade;
        this.descricao = descricao;
        if(id) this.idServico = id; // Inicializa como vazio para evitar erros de referência.
      }
  }
  