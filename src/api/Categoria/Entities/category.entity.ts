import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'CATEGORIA' })
export class Category {
  @PrimaryGeneratedColumn({ name: 'ID_Categoria' })
  id: number;

  @Column({ name: 'Nombre' })
  name: string;
}
