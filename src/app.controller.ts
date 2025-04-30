import { Controller, Get, Render } from '@nestjs/common';
import { CustomerService } from './customer/customer.service';

@Controller()
export class AppController {
  constructor(private readonly customerService: CustomerService) {}

  // ✅ หน้าแรก "/" แสดงหน้า profile พร้อมข้อมูล
  @Get('')
  @Render('index') // จะ render views/index.hbs
  getHomePage() {
    const profile = this.customerService.getProfile();
    return {
      message: 'My Profile',
      ...profile,
    };
  }

  // ✅ ตัวอย่าง route อื่น (ยังคงไว้ได้ถ้าต้องการ)
  @Get('/showname')
  getName(): string {
    return this.customerService.getProfile().name;
  }

  @Get('/showjson')
  getJson() {
    return this.customerService.getProfile();
  }
}
