import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class PaymentStatus {
  @Field()
  success: boolean;

  @Field()
  clientSecret?: string;

  @Field()
  message: string;
}
