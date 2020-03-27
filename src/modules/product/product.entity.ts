import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { ObjectType, Field, ID, Float, Int } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Product extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => Float)
  @Column()
  price: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  company: string;

  @Column({ default: '' })
  ratingsString: string;

  @Field(() => [Int], { nullable: "items" })
  ratings: number[];

  @Field()
  @Column()
  imageUrl: string;

  @Field()
  @Column()
  department: string;

  @Field()
  @Column()
  productNames: string;
}
