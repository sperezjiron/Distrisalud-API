import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Metodo } from './entities/metodo.entity';
import { CreateMetodoDto } from './dto/create-metodo.dto';
import { UpdateMetodoDto } from './dto/update-metodo.dto';

@Injectable()
export class MetodosService {
  constructor(
    @InjectRepository(Metodo)
    private readonly metodoRepo: Repository<Metodo>,
  ) {}

  create(dto: CreateMetodoDto) {
    const metodo = this.metodoRepo.create(dto);
    return this.metodoRepo.save(metodo);
  }

  findAll() {
    return this.metodoRepo.find();
  }

  async findOne(id: number) {
    const metodo = await this.metodoRepo.findOne({ where: { id } });
    if (!metodo) throw new NotFoundException(`Método con ID ${id} no encontrado`);
    return metodo;
  }

  async update(id: number, dto: UpdateMetodoDto) {
    await this.metodoRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const metodo = await this.findOne(id);
    return this.metodoRepo.remove(metodo);
  }
}
