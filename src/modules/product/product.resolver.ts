import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';

import { Product } from './product.entity';
import { ProductService } from './product.service';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query(() => Product, { name: 'product' })
  async getProduct(@Args('productId') productId: string) {
    return this.productService.getProduct(productId);
  }

  @ResolveField(() => Product)
  async ratings(@Parent() product: Product) {
    const { ratingsString } = product;
    delete product.ratingsString;

    if (!ratingsString) {
      product.ratings = [];
    } else {
      product.ratings = ratingsString.split(',').map(Number);
    }

    return product;
  }
}
