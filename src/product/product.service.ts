import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  productFunc(): string {
    return 'Function 1 result';
  }

  productFunc2(): string {
    return 'Function 2 result';
  }

  productFunc3(): string {
    return 'Function 3 result';
  }

  productJson(): object {
    return {
      name: 'Notebook',
      price: 20000,
      description: 'Ryzen9 RTX5090',
    };
  }
}
