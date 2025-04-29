import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
  providers: [UserService],
  exports: [UserService], // Exporting UserService to make it available for other modules
})
export class UserModule {}
