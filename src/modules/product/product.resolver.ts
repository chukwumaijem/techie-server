import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';

import { Product } from './product.entity';
import { ProductService } from './product.service';
import { GetProductDto } from './product.dto';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query(() => Product, { name: 'product' })
  async getProduct(@Args('productId') productId: string) {
    return this.productService.getProduct(productId);
  }

  @Query(() => GetProductDto, { name: 'products' })
  async getProducts(@Args('pageNumber') pageNumber: number) {
    return this.productService.getProducts(pageNumber);
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
    // Todo: Fix error ratings is part of the requested result.
    // Expected Iterable, but did not find one for field Product.ratings.
    return product;
  }
}
