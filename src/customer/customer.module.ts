import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { UtilityModule } from 'src/shared/utility/utility.module';

@Module({
  imports: [UtilityModule], // นำเข้า UtilityModule
  controllers: [CustomerController], // เพิ่ม CustomerController ลงใน controllers
  providers: [CustomerService], // เพิ่ม CustomerService
  exports: [CustomerService], // Exporting CustomerService to make it available for other modules
})
export class CustomerModule {}
