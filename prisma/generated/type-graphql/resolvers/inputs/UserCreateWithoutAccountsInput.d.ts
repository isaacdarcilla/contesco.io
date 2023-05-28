import { ContestantCreateNestedManyWithoutUserInput } from "../inputs/ContestantCreateNestedManyWithoutUserInput";
import { EventCreateNestedManyWithoutUserInput } from "../inputs/EventCreateNestedManyWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutAccountsInput {
  id?: string | undefined;
  name?: string | undefined;
  email: string;
  emailVerified?: Date | undefined;
  image?: string | undefined;
  role?:
    | "ADMIN"
    | "ORGANIZER"
    | "JUDGE"
    | "CONTESTANT"
    | "AUDIENCE"
    | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
  sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
  events?: EventCreateNestedManyWithoutUserInput | undefined;
  Contestant?: ContestantCreateNestedManyWithoutUserInput | undefined;
}
