import { UserCreateOrConnectWithoutAccountsInput } from "../inputs/UserCreateOrConnectWithoutAccountsInput";
import { UserCreateWithoutAccountsInput } from "../inputs/UserCreateWithoutAccountsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutAccountsInput {
  create?: UserCreateWithoutAccountsInput | undefined;
  connectOrCreate?: UserCreateOrConnectWithoutAccountsInput | undefined;
  connect?: UserWhereUniqueInput | undefined;
}
