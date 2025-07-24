import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PromocionAplicadaService } from './promocion-aplicada.service';
import { CreatePromocionAplicadaDto } from './dto/create-promocion-aplicada.dto';
import { UpdatePromocionAplicadaDto } from './dto/update-promocion-aplicada.dto';

@Controller('promocion-aplicada')
export class PromocionAplicadaController {
  constructor(private readonly promoService: PromocionAplicadaService) {}

  @Post()
  create(@Body() dto: CreatePromocionAplicadaDto) {
    return this.promoService.create(dto);
  }

  @Get()
  findAll() {
    return this.promoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.promoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePromocionAplicadaDto) {
    return this.promoService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.promoService.remove(+id);
  }
}
