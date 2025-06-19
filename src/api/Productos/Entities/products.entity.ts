import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'PRODUCTO' })
export class Product {
  @PrimaryGeneratedColumn({ name: 'ID_Producto' })
  id: number;

  @Column({ name: 'FK_ID_Categoria' })
  categoryId: number;

  @Column({ name: 'Nombre', length: 100 })
  name: string;

  @Column({ name: 'Descripcion', length: 500 })
  description: string;

  @Column({ name: 'Precio', type: 'decimal', precision: 18, scale: 2 })
  price: number;

  @Column({ name: 'Unidad_Medida', length: 50 })
  unit: string;

  @Column({ name: 'Imagen_URL', length: 500 })
  imageUrl: string;

  @Column({ name: 'Stock', type: 'int' })
  stock: number;

  @Column({ name: 'Fecha_Ingreso', type: 'date' })
  entryDate: string;
}
