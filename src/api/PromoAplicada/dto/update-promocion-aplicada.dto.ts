import { PartialType } from '@nestjs/mapped-types';
import { CreatePromocionAplicadaDto } from './create-promocion-aplicada.dto';

export class UpdatePromocionAplicadaDto extends PartialType(CreatePromocionAplicadaDto) {}
