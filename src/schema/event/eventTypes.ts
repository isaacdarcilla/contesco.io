import { IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { ObjectType, Field, ID, InputType } from "type-graphql";
@ObjectType()
export class Event {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  organizer: string;

  @Field(() => String)
  category: string;
}

@InputType()
export class CreateEventInput {
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(25)
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(25)
  @Field(() => String)
  organizer: string;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(25)
  @Field(() => String)
  category: string;

  @IsNotEmpty()
  @MinLength(12)
  @MaxLength(280)
  @Field(() => String)
  description: string;
}
