import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DetallePedidoService } from './detallepedido.service';
import { CreateDetallePedidoDto } from './dto/create-detallepedido.dto';
import { UpdateDetallePedidoDto } from './dto/update-detallepedido.dto';

@Controller('detallepedidos')
export class DetallePedidoController {
  constructor(private readonly detallePedidoService: DetallePedidoService) {}

  @Post()
  create(@Body() createDto: CreateDetallePedidoDto) {
    return this.detallePedidoService.create(createDto);
  }

  @Get()
  findAll() {
    return this.detallePedidoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detallePedidoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateDetallePedidoDto) {
    return this.detallePedidoService.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detallePedidoService.remove(+id);
  }
}
