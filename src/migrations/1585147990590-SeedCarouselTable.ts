import { MigrationInterface, getConnection, QueryRunner } from 'typeorm';
import { Carousel } from '../modules/carousel/carousel.entity';
import { carousel } from '../seed/carousel.seed';

export class SeedCarouselTable1585147990590 implements MigrationInterface {
  name = 'SeedCarouselTable1585147990590';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const data = await queryRunner.manager.insert(Carousel, carousel);
    await queryRunner.manager.save(data);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const imageUrlMap = carousel.map(item => ({ image_url: item.image_url }));
    await queryRunner.manager.delete(Carousel, imageUrlMap);
  }
}
