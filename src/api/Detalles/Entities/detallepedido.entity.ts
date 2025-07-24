import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('DETALLEPEDIDO')
export class DetallePedido {
  @PrimaryGeneratedColumn({ name: 'ID_Detalle' })
  id: number;

  @Column({ name: 'FK_ID_Pedido', type: 'int' })
  pedidoId: number;

  @Column({ name: 'FK_ID_Producto', type: 'int' })
  productoId: number;

  @Column({ name: 'Cant_Producto', type: 'int' })
  cantidad: number;

  @Column({ name: 'Precio_Unitario', type: 'decimal', precision: 18, scale: 2 })
  precioUnitario: number;

  @Column({ name: 'Subtotal', type: 'decimal', precision: 18, scale: 2 })
  subtotal: number;
}
