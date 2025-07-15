import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { Promotion } from './entities/promotion.entity';

// Servicio de Promoción que tiene las funciones básicas
@Injectable()
export class PromotionsService {
  constructor(
    @InjectRepository(Promotion)
    private readonly promotionsRepository: Repository<Promotion>,
  ) {}

  create(createPromotionDto: CreatePromotionDto): Promise<Promotion> {
    const newPromotion = this.promotionsRepository.create(createPromotionDto);
    return this.promotionsRepository.save(newPromotion);
  }

  findAll(): Promise<Promotion[]> {
    return this.promotionsRepository.find();
  }

  findOne(id: number): Promise<Promotion> {
    return this.promotionsRepository.findOneBy({ id });
  }

  async update(id: number, updatePromotionDto: UpdatePromotionDto): Promise<Promotion> {
    await this.promotionsRepository.update(id, updatePromotionDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.promotionsRepository.delete(id);
  }
}