import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Servir archivos estáticos desde /public
  app.useStaticAssets(join(__dirname, '../../..', 'Distrisalud-WEB', 'Public', 'assets', 'images', 'products'));

  app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }));
  app.enableCors({
    origin: "http://localhost:8080",
    credentials: true,
  });
  await app.listen(3000);

}
bootstrap();
