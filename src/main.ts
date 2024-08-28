import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors();

  // Aplicar validación global
  app.useGlobalPipes(new ValidationPipe());

  // Configurar prefijo global para las rutas
  app.setGlobalPrefix('api/v1');

  const port = parseInt(process.env.PORT) || 3000;
  await app.listen(port);

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
