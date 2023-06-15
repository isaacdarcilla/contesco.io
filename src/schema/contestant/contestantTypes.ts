import { MaxLength, MinLength } from "class-validator";
import { ObjectType, Field, InputType } from "type-graphql";

@ObjectType()
export class Contestant {
  @Field(() => String)
  id: string;

  @Field(() => String)
  eventId: string;

  @Field(() => String)
  userId: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String, { nullable: true })
  middleName: string | null;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  gender: string;

  @Field(() => Number)
  age: number;

  @Field(() => String, { nullable: true })
  nationality: string | null;

  @Field(() => String, { nullable: true })
  birthDate: string | null;

  @Field(() => String)
  phoneNumber: string;

  @Field(() => String)
  email: string;

  @Field(() => String, { nullable: true })
  photo: string | null;

  @Field(() => Date)
  createdAt: Date | null;

  @Field(() => Date)
  updatedAt: Date | null;
}

@InputType()
export class CreateContestantInput {
  @Field(() => String)
  eventId: string;

  @Field(() => String, { nullable: true })
  photo: string | null;

  @MinLength(2)
  @MaxLength(25)
  @Field(() => String)
  firstName: string;

  @MaxLength(25)
  @Field(() => String, { nullable: true })
  middleName: string | null;

  @MinLength(2)
  @MaxLength(25)
  @Field(() => String)
  lastName: string;

  @Field(() => Number)
  age: number;

  @MinLength(2)
  @MaxLength(25)
  @Field(() => String)
  gender: string;

  @MinLength(2)
  @MaxLength(25)
  @Field(() => String, { nullable: true })
  nationality: string | null;

  @Field(() => String)
  phoneNumber: string;

  @MinLength(2)
  @MaxLength(25)
  @Field(() => String)
  email: string;
}
