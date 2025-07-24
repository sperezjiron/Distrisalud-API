import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bitacora } from './entities/bitacora.entity';
import { CreateBitacoraDto } from './dto/create-bitacora.dto';
import { UpdateBitacoraDto } from './dto/update-bitacora.dto';

@Injectable()
export class BitacoraService {
  constructor(
    @InjectRepository(Bitacora)
    private readonly bitacoraRepo: Repository<Bitacora>,
  ) {}

  create(dto: CreateBitacoraDto) {
    const entry = this.bitacoraRepo.create(dto);
    return this.bitacoraRepo.save(entry);
  }

  findAll() {
    return this.bitacoraRepo.find();
  }

  async findOne(id: number) {
    const entry = await this.bitacoraRepo.findOne({ where: { id } });
    if (!entry) throw new NotFoundException(`Bitácora con ID ${id} no encontrada`);
    return entry;
  }

  async update(id: number, dto: UpdateBitacoraDto) {
    await this.bitacoraRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const entry = await this.findOne(id);
    return this.bitacoraRepo.remove(entry);
  }
}
