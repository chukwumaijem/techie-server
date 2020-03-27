import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from './product.entity';
import { GetProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  async getProduct(productId: string): Promise<Product> {
    const product = await this.productRepo.findOne(productId);
    return product;
  }

  async getProducts(pageNumber: number): Promise<GetProductDto> {
    const MAX_PRODUCTS_PER_PAGE = 20;
    const start = pageNumber < 1 ? 1 : pageNumber;
    const [products, productsCount] = await this.productRepo.findAndCount({
      skip: (start - 1) * MAX_PRODUCTS_PER_PAGE,
      take: MAX_PRODUCTS_PER_PAGE,
    });

    return {
      products,
      total: productsCount,
    };
  }
}
