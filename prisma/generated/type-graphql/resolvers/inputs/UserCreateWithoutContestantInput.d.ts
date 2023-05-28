import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { EventCreateNestedManyWithoutUserInput } from "../inputs/EventCreateNestedManyWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutContestantInput {
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
  accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
  sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
  events?: EventCreateNestedManyWithoutUserInput | undefined;
}
