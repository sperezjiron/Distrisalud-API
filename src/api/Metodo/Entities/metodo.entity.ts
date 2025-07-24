import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'METODO' })
export class Metodo {
  @PrimaryGeneratedColumn({ name: 'ID_Metodo' })
  id: number;

  @Column({ name: 'Nombre', type: 'nvarchar', length: 50 })
  nombre: string;
}
