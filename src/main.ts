import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true // removes unvalidated attributes being send (i.e. if an id is posted but not expected it will be removed)
  }));
  await app.listen(4000);
}
bootstrap();
