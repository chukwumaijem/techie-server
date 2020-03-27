import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from './product.entity';

@ObjectType()
export class GetProductDto {
  @Field(() => [Product])
  products: Product[];

  @Field(() => Int)
  total: number;
}
