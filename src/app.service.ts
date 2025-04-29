import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello NestJS!!!';
  }

  getName(): string {
    return 'Peeranat Chuenkeaw';
  }

  getJson() {
    return {
      name: 'Peeranat',
      lastname: 'Chuenkeaw',
      age: 21,
    };
  }
}
