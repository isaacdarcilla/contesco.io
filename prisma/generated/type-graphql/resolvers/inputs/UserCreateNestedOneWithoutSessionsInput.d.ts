import { UserCreateOrConnectWithoutSessionsInput } from "../inputs/UserCreateOrConnectWithoutSessionsInput";
import { UserCreateWithoutSessionsInput } from "../inputs/UserCreateWithoutSessionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutSessionsInput {
  create?: UserCreateWithoutSessionsInput | undefined;
  connectOrCreate?: UserCreateOrConnectWithoutSessionsInput | undefined;
  connect?: UserWhereUniqueInput | undefined;
}
