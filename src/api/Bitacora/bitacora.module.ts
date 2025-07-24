import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BitacoraService } from './bitacora.service';
import { BitacoraController } from './bitacora.controller';
import { Bitacora } from './entities/bitacora.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bitacora])],
  controllers: [BitacoraController],
  providers: [BitacoraService],
})
export class BitacoraModule {}
