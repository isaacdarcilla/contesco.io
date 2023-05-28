import { ContestantCreateNestedManyWithoutEventInput } from "../inputs/ContestantCreateNestedManyWithoutEventInput";
import { UserCreateNestedOneWithoutEventsInput } from "../inputs/UserCreateNestedOneWithoutEventsInput";
export declare class EventCreateInput {
  id?: string | undefined;
  name: string;
  description: string;
  organizer: string;
  type?: string | undefined;
  category: string;
  tags?: string | undefined;
  banner?: string | undefined;
  slug?: string | undefined;
  eventStarts?: Date | undefined;
  eventEnds?: Date | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
  contestants?: ContestantCreateNestedManyWithoutEventInput | undefined;
  user: UserCreateNestedOneWithoutEventsInput;
}
