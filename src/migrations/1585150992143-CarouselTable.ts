import { MigrationInterface, QueryRunner } from 'typeorm';

export class CarouselTable1585150992143 implements MigrationInterface {
  name = 'CarouselTable1585150992143';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "carousel" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "imageUrl" character varying NOT NULL, CONSTRAINT "PK_d59e0674c5a5efe523df247f67b" PRIMARY KEY ("id"))`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "carousel"`, undefined);
  }
}
