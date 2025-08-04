import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';

@Module({
  imports: [TypeOrmModule], // Aquí va tu conexión global si aún no está en AppModule
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
