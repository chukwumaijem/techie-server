import { MigrationInterface, QueryRunner } from 'typeorm';

export class CarouselTable1585161163507 implements MigrationInterface {
  name = 'CarouselTable1585161163507';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "carousel" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, "imageUrl" character varying NOT NULL, CONSTRAINT "PK_d59e0674c5a5efe523df247f67b" PRIMARY KEY ("id"))`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "carousel"`, undefined);
  }
}
