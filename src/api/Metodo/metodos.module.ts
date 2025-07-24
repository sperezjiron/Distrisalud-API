import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetodosService } from './metodos.service';
import { MetodosController } from './metodos.controller';
import { Metodo } from './entities/metodo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Metodo])],
  controllers: [MetodosController],
  providers: [MetodosService],
})
export class MetodosModule {}
