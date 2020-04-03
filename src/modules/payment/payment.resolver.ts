import { Resolver, Query, Args } from '@nestjs/graphql';
import Stripe from 'stripe';

import { PaymentService } from './payment.service';
import { PaymentStatus } from './payment.dto';

@Resolver()
export class PaymentResolver {
  constructor(private paymentService: PaymentService) {}

  @Query(() => PaymentStatus)
  async confirmPaymentAndChargeCard(@Args('paymentIntent') paymentIntent: Stripe.PaymentIntentsResource) {
    return this.paymentService.confirmPaymentAndChargeCard(paymentIntent);
  }
}
