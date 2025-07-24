import { IsInt } from 'class-validator';

export class CreatePromocionAplicadaDto {
  @IsInt()
  promocionId: number;

  @IsInt()
  productoId: number;
}
