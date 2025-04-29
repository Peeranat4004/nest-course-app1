import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return { message: 'Hello World!' };
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
