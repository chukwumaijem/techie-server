import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Carousel } from './carousel.entity';
import { CarouselResolver } from './carousel.resolver';
import { CarouselService } from './carousel.service';

@Module({
  imports: [TypeOrmModule.forFeature([Carousel])],
  providers: [CarouselResolver, CarouselService],
})
export class CarouselModule {}
