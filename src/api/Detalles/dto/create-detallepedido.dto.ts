import { IsInt, IsNumber, Min } from 'class-validator';

export class CreateDetallePedidoDto {
  @IsInt()
  pedidoId: number; // FK_ID_Pedido

  @IsInt()
  productoId: number; // FK_ID_Producto

  @IsInt()
  @Min(1)
  cantidad: number; // Cant_Producto

  @IsNumber()
  @Min(0)
  precioUnitario: number; // Precio_Unitario

  @IsNumber()
  @Min(0)
  subtotal: number; // Subtotal
}
