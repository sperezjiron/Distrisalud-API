// src/api/Auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../Usuarios/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async validateUser(name: string, plainPassword: string) {
    const user = await this.userRepo.findOne({ where: { name } });
    if (!user) throw new UnauthorizedException('Usuario no encontrado');

    const passwordMatch = await bcrypt.compare(plainPassword, user.pass);
    if (!passwordMatch) throw new UnauthorizedException('Contraseña incorrecta');

    const { pass, ...result } = user;
    return result;
  }
}