import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepo: Repository<Customer>,
  ) {}

  create(createDto: CreateCustomerDto): Promise<Customer> {
    const customer = this.customerRepo.create(createDto);
    return this.customerRepo.save(customer);
  }

  findAll(): Promise<Customer[]> {
    return this.customerRepo.find();
  }

  findOne(id: number): Promise<Customer> {
    return this.customerRepo.findOneBy({ id });
  }

  async update(id: number, updateDto: UpdateCustomerDto): Promise<Customer> {
    await this.customerRepo.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.customerRepo.delete(id);
  }
}