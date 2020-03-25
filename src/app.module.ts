import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarouselModule } from './modules/carousel/carousel.module';

import envs from './config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...envs.database,
      autoLoadEntities: true,
    }),
    CarouselModule,
  ],
})
export class AppModule {}
