import { UserCreateNestedOneWithoutSessionsInput } from "../inputs/UserCreateNestedOneWithoutSessionsInput";
export declare class SessionCreateInput {
  id?: string | undefined;
  sessionToken: string;
  expires: Date;
  user: UserCreateNestedOneWithoutSessionsInput;
}
