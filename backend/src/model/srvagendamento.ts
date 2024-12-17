import {
    Entity,
    PrimaryColumn,
    ManyToOne,
    JoinColumn,
    Column,
  } from "typeorm";
  import { Servico } from "./servico";
  import { Agendamento } from "./agendamento";
  
  @Entity("SrvAgendamento")
  export class SrvAgendamento {
    @PrimaryColumn()
    Servico_idServico!: number;
  
    @PrimaryColumn()
    Agendamento_idAgendamento!: number;
  
    @PrimaryColumn()
    Agendamento_Funcionario_idFuncionario!: number;
  
    @PrimaryColumn()
    Agendamento_Cliente_idCliente!: number;
  
    @Column({ type: "int", nullable: true })
    quantidade?: number;
  
    // Relacionamento com Servico
    @ManyToOne(() => Servico, (servico) => servico.srvAgendamentos)
    @JoinColumn({ name: "Servico_idServico" })
    servico!: Servico;
  
    // Relacionamento com Agendamento
    @ManyToOne(() => Agendamento, (agendamento) => agendamento.srvAgendamentos)
    @JoinColumn([
      { name: "Agendamento_idAgendamento", referencedColumnName: "idAgendamento" },
      { name: "Agendamento_Funcionario_idFuncionario", referencedColumnName: "Funcionario_idFuncionario" },
      { name: "Agendamento_Cliente_idCliente", referencedColumnName: "Cliente_idCliente" },
    ])
    agendamento!: Agendamento;
  }
  