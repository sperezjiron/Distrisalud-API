import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'PROMOCIONAPLICADA' })
export class PromocionAplicada {
  @PrimaryGeneratedColumn({ name: 'ID_PromApli' })
  id: number;

  @Column({ name: 'FK_ID_Promocion' })
  promocionId: number;

  @Column({ name: 'FK_ID_Producto' })
  productoId: number;
}

