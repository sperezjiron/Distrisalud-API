import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './entities/admin.entity';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Buffer } from 'buffer';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
  ) {}

  async create(dto: CreateAdminDto): Promise<Admin> {
    const admin = new Admin();
    admin.nombre = dto.nombre;
    admin.userId = dto.userId;
    admin.estado = Buffer.from([dto.estado]); // Convertimos 1 o 0 a Buffer
    return this.adminRepository.save(admin);
  }

  async findAll(): Promise<Admin[]> {
    return this.adminRepository.find();
  }

 async findOne(id: number): Promise<Admin> {
  const admin = await this.adminRepository.findOne({ where: { id } });
  if (!admin) {
    throw new NotFoundException(`Admin con ID ${id} no encontrado`);
  }
  return admin;
}

  async update(id: number, updateDto: UpdateAdminDto): Promise<Admin> {
  const admin = await this.adminRepository.findOne({ where: { id } });
  if (!admin) throw new NotFoundException(`Administrador con ID ${id} no encontrado`);

  // Asegurarse de que estado sea un número
  if (typeof updateDto.estado !== 'number') {
    throw new BadRequestException('El estado debe ser un número');
  }

  await this.adminRepository.update(id, {
    ...updateDto,
    estado: Buffer.from([updateDto.estado]), // Convertimos 1 o 0 a Buffer
  });
  return this.adminRepository.findOne({ where: { id } });
}



  async remove(id: number): Promise<void> {
    const admin = await this.findOne(id);
    await this.adminRepository.remove(admin);
  }
}
