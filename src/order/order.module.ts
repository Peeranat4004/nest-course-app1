import { Module } from '@nestjs/common';
import { OrderService } from './order.service';

@Module({
  providers: [OrderService],
  exports: [OrderService], // Exporting OrderService to make it available for other modules
})
export class OrderModule {}
