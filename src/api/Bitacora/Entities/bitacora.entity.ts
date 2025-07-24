import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'BITACORA' })
export class Bitacora {
  @PrimaryGeneratedColumn({ name: 'ID_Bitacora' })
  id: number;

  @Column({ name: 'FK_ID_Usuario' })
  usuarioId: number;

  @Column({ name: 'Accion', type: 'nvarchar', length: 100 })
  accion: string;

  @Column({ name: 'Tabla_Afectada', type: 'nvarchar', length: 100 })
  tablaAfectada: string;

  @Column({ name: 'Valor_Antes', type: 'nvarchar', length: 150 })
  valorAntes: string;

  @Column({ name: 'Valor_Despues', type: 'nvarchar', length: 150 })
  valorDespues: string;

  @Column({ name: 'Fecha_Hora', type: 'datetime' })
  fechaHora: Date;
}
