import { Module } from '@nestjs/common';
import { UtilityService } from './utility.service';

@Module({
  providers: [UtilityService],
  exports: [UtilityService], // Exporting UtilityService to make it available for other modules
})
export class UtilityModule {}
