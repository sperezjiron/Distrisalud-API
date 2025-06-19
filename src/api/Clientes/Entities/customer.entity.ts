import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'CLIENTE' })
export class Customer {
  @PrimaryGeneratedColumn({ name: 'ID_Cliente' })
  id: number;

  @Column({ name: 'FK_ID_Usuario' })
  userId: number;

  @Column({ name: 'Nombre', length: 50 })
  name: string;

  @Column({ name: 'Cedula', length: 50 })
  cedula: string;

  @Column({ name: 'Tipo_Cedula', length: 50 })
  tipoCedula: string;

  @Column({ name: 'Email', length: 50 })
  email: string;

  @Column({ name: 'Telefono', length: 50 })
  telefono: string;

  @Column({ name: 'Direccion', length: 500 })
  direccion: string;

  @Column({ name: 'Codigo_Postal', length: 50 })
  codigoPostal: string;

  @Column({ name: 'Nombre_Negocio', length: 150 })
  nombreNegocio: string;

  @Column({ name: 'Tipo_Cliente', length: 50 })
  tipoCliente: string;

  @Column({ name: 'Estado', length: 50 })
  estado: string;

  @Column({ name: 'Fecha_Creacion', type: 'date' })
  fechaCreacion: Date;

  @Column({ name: 'Fecha_Ultimo_Ingreso', type: 'date' })
  fechaUltimoIngreso: Date;
}