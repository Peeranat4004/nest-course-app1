import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  userFunc(): string {
    return 'User Function';
  }
}
