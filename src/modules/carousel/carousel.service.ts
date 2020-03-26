import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import shuffle from 'lodash/shuffle';

import { Carousel } from './carousel.entity';

@Injectable()
export class CarouselService {
  constructor(
    @InjectRepository(Carousel)
    private carouselRepository: Repository<Carousel>,
  ) {}

  async getAll(): Promise<Carousel[]> {
    const carousel = await this.carouselRepository.find();
    return shuffle(carousel);
  }
}
