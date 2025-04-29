import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    // ส่งข้อมูลที่สามารถใช้ในเทมเพลตได้
    return { message: this.appService.getHello() };
  }

  @Get('/showname')
  getName(): string {
    return this.appService.getName();
  }

  @Get('/showjson')
  getJson() {
    return this.appService.getJson();
  }
}
