import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'maratona' })
export class Maratona {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    aula: string;
}