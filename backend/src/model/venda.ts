import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from "typeorm";
  import { Funcionario } from "./funcionario";
  import { Cliente } from "./cliente";
  
  @Entity()
  export class Venda {
    @PrimaryGeneratedColumn({ name: "idVenda" })
    idVenda!: number;
  
    @Column("datetime", { name: "dataVenda", nullable: false })
    dataVenda: Date;
  
    @Column("decimal", {
      name: "valor",
      precision: 6,
      scale: 2,
      nullable: false,
    })
    valor: number;
  
    @Column({ nullable: true, type: "decimal", precision: 6, scale: 2 })
    Desconto: number | null;
  
    @ManyToOne(() => Funcionario, (funcionario) => funcionario.vendas, {
      nullable: false,
    })
    @JoinColumn({ name: "Funcionario_idFuncionario" })
    funcionario: Funcionario;
  
    @ManyToOne(() => Cliente, (cliente) => cliente.vendas, { onDelete: "CASCADE" })
    @JoinColumn({ name: "Cliente_idCliente" })
    cliente: Cliente;

    constructor(
        dataVenda: Date,
        valor: number,
        funcionario: Funcionario,
        cliente: Cliente,
        Desconto?: number | null,
        id?: number,
      ) {
        this.dataVenda = dataVenda;
        this.valor = valor;
        this.funcionario = funcionario;
        this.cliente = cliente;
        this.Desconto = Desconto || null;
        if(id) this.idVenda = id;
      }
  }