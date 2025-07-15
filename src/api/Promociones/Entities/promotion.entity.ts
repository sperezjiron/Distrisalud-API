import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity( { name: 'PROMOCION' })  // Cambiar al nombre real de la tabla si es distinto
export class Promotion {
  @PrimaryGeneratedColumn({ name: 'ID_Promocion' })
  id: number;

  @Column( { name: 'Nombre' })
  title: string;

  @Column( { name: 'Descripcion', type: 'text' })
  description: string;

  @Column( { name: 'Descuento', type: 'decimal'})
  discount: number;

  @Column( { name: 'Fecha_Inicio', type: 'date' })
  startDate: string;

  @Column( { name: 'Fecha_Fin', type: 'date' })
  endDate: string;

  @Column({ name: 'Estado', type: 'binary', length: 50 })
  status: Buffer;


}