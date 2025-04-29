import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilityService {
  shareFunc(): string {
    return 'Shared Utility Function';
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
