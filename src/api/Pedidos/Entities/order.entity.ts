import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'PEDIDO' })  // Cambiar al nombre real de la tabla si es distinto
export class Order {
  @PrimaryGeneratedColumn({ name: 'ID_Pedido' })  // Ajustá si es diferente
  id: number;

  @Column({ name: 'Fecha', type: 'date' })
  date: Date;

  @Column({ name: 'Estado', length: 50 })
  status: string;

  @Column({ name: 'FK_ID_Cliente' })
  clientId: number;

  @Column({ name: 'Monto_Total', type: 'decimal', precision: 18, scale: 2 })
  totalAmount: number;
}