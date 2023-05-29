import { MaxLength, MinLength } from "class-validator";
import { ObjectType, Field, InputType } from "type-graphql";
@ObjectType()
export class Event {
  @Field(() => String)
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
  @MinLength(6)
  @MaxLength(25)
  @Field(() => String)
  name: string;

  @MinLength(6)
  @MaxLength(25)
  @Field(() => String)
  organizer: string;

  @MinLength(6)
  @MaxLength(25)
  @Field(() => String)
  category: string;

  @MinLength(12)
  @MaxLength(280)
  @Field(() => String)
  description: string;
}
