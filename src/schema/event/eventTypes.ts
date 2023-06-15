import { MaxLength, MinLength } from "class-validator";
import { ObjectType, Field, InputType } from "type-graphql";

@ObjectType()
export class Event {
  @Field(() => String)
  id: string;

  @Field(() => String)
  userId: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  organizer: string;

  @Field(() => String)
  category: string;

  @Field(() => String, { nullable: true })
  type: string | null;

  @Field(() => String, { nullable: true })
  tags: string | null;

  @Field(() => String, { nullable: true })
  banner: string | null;

  @Field(() => String, { nullable: true })
  slug: string | null;

  @Field(() => String, { nullable: true })
  eventStarts: Date | null;

  @Field(() => String, { nullable: true })
  eventEnds: Date | null;

  @Field(() => Date)
  createdAt: Date | null;

  @Field(() => Date)
  updatedAt: Date | null;
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
