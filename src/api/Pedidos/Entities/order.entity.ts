import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'ORDERS' })  // Cambiar al nombre real de la tabla si es distinto
export class Order {
  @PrimaryGeneratedColumn({ name: 'ID_Order' })  // Ajustá si es diferente
  id: number;

  @Column({ name: 'Date', type: 'date' })
  date: string;

  @Column({ name: 'Status', length: 50 })
  status: string;

  @Column({ name: 'FK_Client_ID' })
  clientId: number;

  @Column({ name: 'Total_Amount', type: 'decimal', precision: 18, scale: 2 })
  totalAmount: number;
}