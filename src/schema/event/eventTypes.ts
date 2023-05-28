import { ObjectType, Field, ID } from "type-graphql";

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
