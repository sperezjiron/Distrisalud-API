import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/products.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Transform } from 'class-transformer';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

async create(createProductDto: CreateProductDto): Promise<Product> {
  const product = this.productRepository.create(createProductDto);
  return this.productRepository.save(product);
}

async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
  await this.productRepository.update(id, {
    ...updateProductDto,
    entryDate: updateProductDto.entryDate.toISOString(), // transforma Date a string
  });
  return this.findOne(id);
}


  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne(id: number): Promise<Product> {
    return this.productRepository.findOneBy({ id });
  }


  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}