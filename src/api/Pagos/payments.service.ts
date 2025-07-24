import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './entities/payment.entity';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepo: Repository<Payment>,
  ) {}

  create(dto: CreatePaymentDto) {
    const payment = this.paymentRepo.create(dto);
    return this.paymentRepo.save(payment);
  }

  findAll() {
    return this.paymentRepo.find();
  }

  async findOne(id: number) {
    const payment = await this.paymentRepo.findOne({ where: { id } });
    if (!payment) throw new NotFoundException(`Pago con ID ${id} no encontrado`);
    return payment;
  }

  async update(id: number, dto: UpdatePaymentDto) {
    await this.paymentRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const payment = await this.findOne(id);
    return this.paymentRepo.remove(payment);
  }
}
