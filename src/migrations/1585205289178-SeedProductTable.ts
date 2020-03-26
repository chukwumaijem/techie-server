import { MigrationInterface, QueryRunner } from 'typeorm';

import { Product } from '../modules/product/product.entity';
import { products } from '../seed/products.seed';

export class SeedProductTable1585205289178 implements MigrationInterface {
  name = 'SeedProductTable1585205289178';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const productRepo = await queryRunner.manager.getRepository(Product);
    const data = products.map(product => {
      return {
        ...product,
        ratingsString: product.ratings.join(','),
      };
    });
    await productRepo.insert(data);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const productRepo = await queryRunner.manager.getRepository(Product);
    await productRepo.clear();
  }
}
