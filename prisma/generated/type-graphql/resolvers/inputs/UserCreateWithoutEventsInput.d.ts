import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { ContestantCreateNestedManyWithoutUserInput } from "../inputs/ContestantCreateNestedManyWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutEventsInput {
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
  Contestant?: ContestantCreateNestedManyWithoutUserInput | undefined;
}
