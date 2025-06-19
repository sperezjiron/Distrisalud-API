import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'PAGO' })
export class Payment {
  @PrimaryGeneratedColumn({ name: 'ID_Pago' })
  id: number;

  @Column({ name: 'FK_ID_Pedido' })
  orderId: number;

  @Column({ name: 'FK_ID_Metodo' })
  methodId: number;

  @Column({ name: 'Comprobante_URL', length: 500 })
  receiptUrl: string;

  @Column({ name: 'Estado_Pago', length: 50 })
  paymentStatus: string;

  @Column({ name: 'Tipo_Pago', length: 50 })
  paymentType: string;

  @Column({ name: 'Fecha_Pago', type: 'date' })
  paymentDate: string;

  @Column({ name: 'Monto_Pago', type: 'decimal', precision: 18, scale: 2 })
  amount: number;
}