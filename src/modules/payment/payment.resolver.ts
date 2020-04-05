import { Resolver, Query, Args, Int } from '@nestjs/graphql';

import { PaymentService } from './payment.service';
import { PaymentStatus } from './payment.dto';

@Resolver()
export class PaymentResolver {
  constructor(private paymentService: PaymentService) {}

  @Query(() => PaymentStatus)
  async createPaymentIntent(@Args('amount', { type: () => Int}) amount: number) {
    return this.paymentService.createPaymentIntent(amount);
  }
}
