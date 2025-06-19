import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'USUARIO' })
export class User {
  @PrimaryGeneratedColumn({ name: 'ID_Usuario' })
  id: number;

  @Column({ name: 'Nombre' })
  name: string;

  @Column({ name: 'Contraseña' })
  pass: string;

  @Column({ name: 'FK_ID_Rol' })
  rolId: number;

  @Column({ name: 'FK_ID_Estado' })
  estado: number; 
}