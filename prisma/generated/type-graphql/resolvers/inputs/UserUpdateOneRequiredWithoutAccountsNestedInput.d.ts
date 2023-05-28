import { UserCreateOrConnectWithoutAccountsInput } from "../inputs/UserCreateOrConnectWithoutAccountsInput";
import { UserCreateWithoutAccountsInput } from "../inputs/UserCreateWithoutAccountsInput";
import { UserUpdateWithoutAccountsInput } from "../inputs/UserUpdateWithoutAccountsInput";
import { UserUpsertWithoutAccountsInput } from "../inputs/UserUpsertWithoutAccountsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutAccountsNestedInput {
  create?: UserCreateWithoutAccountsInput | undefined;
  connectOrCreate?: UserCreateOrConnectWithoutAccountsInput | undefined;
  upsert?: UserUpsertWithoutAccountsInput | undefined;
  connect?: UserWhereUniqueInput | undefined;
  update?: UserUpdateWithoutAccountsInput | undefined;
}
