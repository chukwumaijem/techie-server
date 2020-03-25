import {MigrationInterface, QueryRunner} from "typeorm";

export class CarouselTable1585147470095 implements MigrationInterface {
    name = 'CarouselTable1585147470095'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "carousel" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "image_url" character varying NOT NULL, CONSTRAINT "PK_d59e0674c5a5efe523df247f67b" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "carousel"`, undefined);
    }

}
