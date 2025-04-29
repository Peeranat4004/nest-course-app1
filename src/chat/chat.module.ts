import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';

@Module({
  providers: [ChatService],
  exports: [ChatService], // Exporting ChatService to make it available for other modules
})
export class ChatModule {}
