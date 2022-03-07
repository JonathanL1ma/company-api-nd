import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 4000;
  const app = await NestFactory.create(AppModule, { cors: false });
  app.setGlobalPrefix('api');
  await app.listen(PORT);
}
bootstrap();
