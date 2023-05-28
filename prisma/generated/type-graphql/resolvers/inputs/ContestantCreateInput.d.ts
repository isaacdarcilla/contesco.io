import { EventCreateNestedOneWithoutContestantsInput } from "../inputs/EventCreateNestedOneWithoutContestantsInput";
import { UserCreateNestedOneWithoutContestantInput } from "../inputs/UserCreateNestedOneWithoutContestantInput";
export declare class ContestantCreateInput {
  id?: string | undefined;
  firstName: string;
  middleName?: string | undefined;
  lastName: string;
  gender: string;
  age: number;
  nationality?: string | undefined;
  birthDate?: string | undefined;
  phoneNumber: string;
  email: string;
  photo?: string | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
  event: EventCreateNestedOneWithoutContestantsInput;
  user: UserCreateNestedOneWithoutContestantInput;
}
