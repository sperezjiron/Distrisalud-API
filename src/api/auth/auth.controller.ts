import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { name: string; pass: string }) {
    const { name, pass } = body;
    if (!name || !pass) {
      throw new BadRequestException('Faltan credenciales');
    }
    const user = await this.authService.validateUser(name, pass);
    return {
      message: 'Login exitoso',
      user, // sin contraseña
    };
  }
}