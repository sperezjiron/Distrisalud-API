import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './entities/admin.entity';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Injectable()
export class AdminsService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepo: Repository<Admin>,
  ) {}

  create(dto: CreateAdminDto): Promise<Admin> {
    const admin = this.adminRepo.create(dto);
    return this.adminRepo.save(admin);
  }

  findAll(): Promise<Admin[]> {
    return this.adminRepo.find();
  }

  findOne(id: number): Promise<Admin> {
    return this.adminRepo.findOneBy({ id });
  }

  async update(id: number, dto: UpdateAdminDto): Promise<Admin> {
    await this.adminRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.adminRepo.delete(id);
  }
}