import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'ADMINISTRADOR' })
export class Admin {
  @PrimaryGeneratedColumn({ name: 'ID_Admin' })
  id: number;

  @Column({ name: 'Nombre', length: 50 })
  nombre: string;

  @Column({ name: 'FK_ID_Usuario' })
  userId: number;

  @Column({ name: 'Estado', type: 'binary', length: 50 })
  estado: Buffer; // Se usa Buffer para campos binarios
}