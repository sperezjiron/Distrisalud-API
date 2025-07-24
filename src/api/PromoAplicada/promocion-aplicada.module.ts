import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PromocionAplicadaService } from './promocion-aplicada.service';
import { PromocionAplicadaController } from './promocion-aplicada.controller';
import { PromocionAplicada } from './entities/promocion-aplicada.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PromocionAplicada])],
  controllers: [PromocionAplicadaController],
  providers: [PromocionAplicadaService],
})
export class PromocionAplicadaModule {}
