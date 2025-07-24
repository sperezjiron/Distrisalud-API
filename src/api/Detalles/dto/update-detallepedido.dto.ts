import { PartialType } from '@nestjs/mapped-types';
import { CreateDetallePedidoDto } from './create-detallepedido.dto';

export class UpdateDetallePedidoDto extends PartialType(CreateDetallePedidoDto) {}
