import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilityService {
  [x: string]: any;
  shareFunc(): string {
    return 'Shared customer Function';
  }
  chatFunc(): string {
    return 'Chat Utility Function';
  }
  orderFunc(): string {
    return 'Order Utility Function';
  }
  userFunc(): string {
    return 'User Utility Function';
  }
}
