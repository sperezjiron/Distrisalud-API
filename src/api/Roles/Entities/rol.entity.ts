import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('ROL')
export class Rol {
  @PrimaryGeneratedColumn({ name: 'ID_Rol' })
  id: number;

  @Column({ name: 'Nombre', type: 'varchar', length: 50 })
  nombre: string;
}
