import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PromocionAplicada } from './entities/promocion-aplicada.entity';
import { CreatePromocionAplicadaDto } from './dto/create-promocion-aplicada.dto';
import { UpdatePromocionAplicadaDto } from './dto/update-promocion-aplicada.dto';

@Injectable()
export class PromocionAplicadaService {
  constructor(
    @InjectRepository(PromocionAplicada)
    private readonly promoRepo: Repository<PromocionAplicada>,
  ) {}

  create(dto: CreatePromocionAplicadaDto) {
    const promo = this.promoRepo.create(dto);
    return this.promoRepo.save(promo);
  }

  findAll() {
    return this.promoRepo.find();
  }

  async findOne(id: number) {
    const promo = await this.promoRepo.findOne({ where: { id } });
    if (!promo) throw new NotFoundException(`Promoción aplicada con ID ${id} no encontrada`);
    return promo;
  }

  async update(id: number, dto: UpdatePromocionAplicadaDto) {
    await this.promoRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const promo = await this.findOne(id);
    return this.promoRepo.remove(promo);
  }
}
