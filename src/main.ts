import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  // Static assets เช่น รูป
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // ตั้งค่าโฟลเดอร์ view
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  app.setViewEngine('hbs'); // ใช้ Handlebars

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
