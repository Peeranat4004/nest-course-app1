import { Injectable } from '@nestjs/common';

@Injectable()
export class GlobalHelperService {
  globalFunc(): string {
    return 'Global Helper Function';
  }
  chatFunc(): string {
    return 'Chat Helper Function';
  }
  orderFunc(): string {
    return 'Order Helper Function';
  }
  userFunc(): string {
    return 'User Helper Function';
  }
}
