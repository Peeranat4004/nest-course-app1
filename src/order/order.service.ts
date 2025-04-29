import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  orderFunc(): string {
    return 'Order Function';
  }
}
