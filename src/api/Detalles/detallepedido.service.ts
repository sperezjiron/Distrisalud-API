import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetallePedido } from './Entities/detallepedido.entity';
import { CreateDetallePedidoDto } from './dto/create-detallepedido.dto';
import { UpdateDetallePedidoDto } from './dto/update-detallepedido.dto';

@Injectable()
export class DetallePedidoService {
  constructor(
    @InjectRepository(DetallePedido)
    private readonly detallePedidoRepository: Repository<DetallePedido>,
  ) {}

  create(createDto: CreateDetallePedidoDto): Promise<DetallePedido> {
    const detalle = this.detallePedidoRepository.create(createDto);
    return this.detallePedidoRepository.save(detalle);
  }

  findAll(): Promise<DetallePedido[]> {
    return this.detallePedidoRepository.find();
  }

  async findOne(id: number): Promise<DetallePedido> {
    const detalle = await this.detallePedidoRepository.findOne({ where: { id } });
    if (!detalle) throw new NotFoundException(`DetallePedido con ID ${id} no encontrado`);
    return detalle;
  }

  async update(id: number, updateDto: UpdateDetallePedidoDto): Promise<DetallePedido> {
    await this.detallePedidoRepository.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const detalle = await this.findOne(id);
    await this.detallePedidoRepository.remove(detalle);
  }
}
