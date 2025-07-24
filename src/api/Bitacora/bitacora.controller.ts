import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { BitacoraService } from './bitacora.service';
import { CreateBitacoraDto } from './dto/create-bitacora.dto';
import { UpdateBitacoraDto } from './dto/update-bitacora.dto';

@Controller('bitacora')
export class BitacoraController {
  constructor(private readonly bitacoraService: BitacoraService) {}

  @Post()
  create(@Body() dto: CreateBitacoraDto) {
    return this.bitacoraService.create(dto);
  }

  @Get()
  findAll() {
    return this.bitacoraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bitacoraService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateBitacoraDto) {
    return this.bitacoraService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bitacoraService.remove(+id);
  }
}
