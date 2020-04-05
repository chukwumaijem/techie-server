import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

import envs from '../../config';
import { PaymentStatus } from './payment.dto';

@Injectable()
export class PaymentService {
  private stripe;

  constructor() {
    this.stripe = new Stripe(envs.stripeSecretKey, {
      apiVersion: '2020-03-02',
    });
  }
  async createPaymentIntent(amount): Promise<PaymentStatus> {
    try {
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount,
        currency: 'usd',
      });
      return {
        success: true,
        clientSecret: paymentIntent.client_secret,
        message: 'Payment intent successfully created.'
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}
