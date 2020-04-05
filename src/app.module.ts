import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { CarouselModule } from './modules/carousel/carousel.module';
import { ProductModule } from './modules/product/product.module';
import { PaymentModule } from './modules/payment/payment.module';
import envs from './config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...envs.database,
      autoLoadEntities: true,
    }),
    CarouselModule,
    GraphQLModule.forRoot({
      debug: !envs.isProduction,
      playground: !envs.isProduction,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ProductModule,
    PaymentModule,
  ],
})
export class AppModule {}
