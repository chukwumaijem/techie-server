import {MigrationInterface, QueryRunner} from "typeorm";

export class ProductTable1585205214558 implements MigrationInterface {
    name = 'ProductTable1585205214558'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "price" integer NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "company" character varying NOT NULL, "ratingsString" character varying NOT NULL, "imageUrl" character varying NOT NULL, "department" character varying NOT NULL, "productNames" character varying NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`, undefined);
    }

}
