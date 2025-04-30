import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
  customerFunc(): string {
    return 'Customer Function';
  }

  getProfile() {
    return {
      name: 'Patcharapong Pumimach',
      age: 22,
      email: 'aumusiclove123@gmail.com',
      bio: 'Digital Engineering',
    };
  }
}
