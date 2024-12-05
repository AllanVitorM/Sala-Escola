import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn({ type: "int" })
    idCliente?: number;

    @Column({ length: 100, unique: true, nullable: false })
    Email: string;

    @Column({ type: "date", nullable: false })
    DataNasc: Date;

    @Column({ length: 45, nullable: false })
    Senha: string;

    @Column({ length: 45, nullable: false })
    Nome: string;

    constructor(
        Email: string, 
        DataNasc: Date, 
        Senha: string, 
        Nome: string
        ) {
        this.Email = Email;
        this.DataNasc = DataNasc;
        this.Senha = Senha;
        this.Nome = Nome;
    }
}