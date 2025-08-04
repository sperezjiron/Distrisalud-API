import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

 @Patch(':id')
async update(@Param('id') id: number, @Body() updateOrderDto: UpdateOrderDto) {
  await this.ordersService.update(id, updateOrderDto);
  return { message: 'Pedido actualizado correctamente' }; // 👈 esto es clave
}

// orders.controller.ts
@Get('stats/monthly-sales')
async getMonthlySales() {
  return this.ordersService.getMonthlySales(); // este método lo creas en el servicio
}


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}