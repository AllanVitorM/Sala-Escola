import {
    Entity,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    OneToMany
  } from "typeorm";
  import { Funcionario } from "./funcionario";
  import { Cliente } from "./cliente";
  import { SrvAgendamento } from "./srvagendamento";

  @Entity()
  export class Agendamento {
    @PrimaryGeneratedColumn()
    idAgendamento!: number;

    @PrimaryColumn()
    Funcionario_idFuncionario!: number;
  
    @PrimaryColumn()
    Cliente_idCliente!: number;
  
    @Column({ type: "varchar", length: 45, nullable: false })
    Status: string;
  
    @Column({ type: "datetime", nullable: false })
    DataAgenda: Date;
  
    @ManyToOne(() => Funcionario, (funcionario) => funcionario.agendamentos, {
        nullable: false,
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      })
      @JoinColumn({ name: "Funcionario_idFuncionario", referencedColumnName: "idFuncionario" })
      funcionario!: Funcionario;
  
      @ManyToOne(() => Cliente, (cliente) => cliente.agendamentos, {
        nullable: false,
        onDelete: "CASCADE",
        onUpdate: "NO ACTION",
      })
      @JoinColumn({ name: "Cliente_idCliente", referencedColumnName: "idCliente" })
      cliente!: Cliente;
      @OneToMany(() => SrvAgendamento, (srvAgendamento) => srvAgendamento.agendamento)
      srvAgendamentos!: SrvAgendamento;
    

    

    constructor(
        Status: string,
        DataAgenda: Date,
        cliente: Cliente,
        funcionario: Funcionario,
        id?: number
      ) {
        this.Status = Status;
        this.DataAgenda = DataAgenda;
        this.funcionario = funcionario
        this.cliente = cliente;
        if(id) this.idAgendamento = id;
        
      }
  }
  