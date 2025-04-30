import { Controller, Get } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('customer')
export class CustomerController {
  constructor(
    private readonly customerService: CustomerService,
    private readonly globalHelperService: GlobalHelperService,
    private readonly utilityService: UtilityService,
  ) {}

  @Get('shared')
  sharedFunc(): string {
    return this.utilityService.shareFunc();
  }

  @Get('global')
  globalFunc(): string {
    return this.globalHelperService.globalFunc();
  }
}
