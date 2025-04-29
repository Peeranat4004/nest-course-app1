import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service'; // Assuming you have a GlobalHelperService
@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly utilityService: UtilityService,
    private readonly globalHelperService: GlobalHelperService, // Assuming you have a GlobalHelperService
  ) {}

  @Get('/global')
  globalFunc(): string {
    return this.globalHelperService.globalFunc();
  }

  @Get()
  productFunc(): string {
    return this.productService.productFunc();
  }

  @Get('/function2')
  productFunc2(): string {
    return this.productService.productFunc2();
  }

  @Get('/shared')
  sharedFunc(): string {
    return this.utilityService.shareFunc();
  }

  @Get('/function3')
  productFunc3(): string {
    return this.productService.productFunc3();
  }

  @Get('/productjson')
  productJson(): object {
    return this.productService.productJson();
  }
  @Get('/user')
  userFunc(): string {
    return this.utilityService.userFunc();
  }

  @Get('/chat')
  chatFunc(): string {
    return this.utilityService.chatFunc();
  }

  @Get('/order')
  orderFunc(): string {
    return this.utilityService.orderFunc();
  }
}
