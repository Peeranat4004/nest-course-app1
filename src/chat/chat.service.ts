import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  chatFunc(): string {
    return 'Chat Function';
  }
}
