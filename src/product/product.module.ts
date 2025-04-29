import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { UtilityModule } from 'src/shared/utility/utility.module';
import { ProductController } from './product.controller'; // นำเข้า ProductController

@Module({
  imports: [UtilityModule], // นำเข้า UtilityModule
  controllers: [ProductController], // เพิ่ม ProductController ลงใน controllers
  providers: [ProductService], // เพิ่ม ProductService
})
export class ProductModule {}
