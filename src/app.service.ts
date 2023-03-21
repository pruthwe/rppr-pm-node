import { Injectable } from '@nestjs/common';
import { Product } from './types/product';

@Injectable()
export class AppService {
  products: Product[];
  constructor() {
    this.products = [
      {
        productId: 1,
        productName: 'Leaf Rake',
        productCode: 'GDN-0011',
        description: 'Leaf rake with 48-inch wooden handle.',
        price: 19.95,
        starRating: 3.2,
      },
      {
        productId: 2,
        productName: 'Garden Cart',
        productCode: 'GDN-0023',
        description: '15 gallon capacity rolling garden cart',
        price: 32.99,
        starRating: 4.6,
      },
    ];
  }
  getHello(): string {
    return 'Hello World!';
  }

  getProducts(): Product[] {
    return this.products;
  }
}
