import { Resolver, Query } from '@nestjs/graphql';

import { CarouselService } from './carousel.service';
import { Carousel } from './carousel.entity';

@Resolver(() => Carousel)
export class CarouselResolver {
  constructor(private carouselService: CarouselService) {}

  @Query(() => [Carousel], { name: 'carousels' })
  async getCarousels() {
    return this.carouselService.getAll();
  }
}
