import { UserCreateOrConnectWithoutSessionsInput } from "../inputs/UserCreateOrConnectWithoutSessionsInput";
import { UserCreateWithoutSessionsInput } from "../inputs/UserCreateWithoutSessionsInput";
import { UserUpdateWithoutSessionsInput } from "../inputs/UserUpdateWithoutSessionsInput";
import { UserUpsertWithoutSessionsInput } from "../inputs/UserUpsertWithoutSessionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutSessionsNestedInput {
  create?: UserCreateWithoutSessionsInput | undefined;
  connectOrCreate?: UserCreateOrConnectWithoutSessionsInput | undefined;
  upsert?: UserUpsertWithoutSessionsInput | undefined;
  connect?: UserWhereUniqueInput | undefined;
  update?: UserUpdateWithoutSessionsInput | undefined;
}
