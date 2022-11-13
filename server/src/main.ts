import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * bootstrap function
 * this function bootstraps your entire nest application
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  await app.listen(4000);
}
bootstrap();
