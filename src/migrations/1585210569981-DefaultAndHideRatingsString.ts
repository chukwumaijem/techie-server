import {MigrationInterface, QueryRunner} from "typeorm";

export class DefaultAndHideRatingsString1585210569981 implements MigrationInterface {
    name = 'DefaultAndHideRatingsString1585210569981'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "ratingsString" SET DEFAULT ''`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "ratingsString" DROP DEFAULT`, undefined);
    }

}
