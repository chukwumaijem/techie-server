import { MigrationInterface, QueryRunner } from 'typeorm';
import { Carousel } from '../modules/carousel/carousel.entity';
import { carousel } from '../seed/carousel.seed';

export class SeedCarouselTable1585151003854 implements MigrationInterface {
  name = 'SeedCarouselTable1585151003854';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const carouselRepo = await queryRunner.manager.getRepository(Carousel);
    await carouselRepo.insert(carousel);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const carouselRepo = await queryRunner.manager.getRepository(Carousel);
    await carouselRepo.clear();
  }
}
