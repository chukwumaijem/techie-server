import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameProductNameToModel1585329835179
  implements MigrationInterface {
  name = 'RenameProductNameToModel1585329835179';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product" RENAME COLUMN "name" TO "model" `,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "product" RENAME COLUMN "productNames" TO "name" `,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product" RENAME COLUMN "model" TO "name"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "product" RENAME COLUMN "name" TO "productNames"`,
      undefined,
    );
  }
}
