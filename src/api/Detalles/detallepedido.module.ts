import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetallePedidoService } from './detallepedido.service';
import { DetallePedidoController } from './detallepedido.controller';
import { DetallePedido } from './Entities/detallepedido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DetallePedido])],
  controllers: [DetallePedidoController],
  providers: [DetallePedidoService],
})
export class DetallePedidoModule {}
