import { UserCreateOrConnectWithoutEventsInput } from "../inputs/UserCreateOrConnectWithoutEventsInput";
import { UserCreateWithoutEventsInput } from "../inputs/UserCreateWithoutEventsInput";
import { UserUpdateWithoutEventsInput } from "../inputs/UserUpdateWithoutEventsInput";
import { UserUpsertWithoutEventsInput } from "../inputs/UserUpsertWithoutEventsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutEventsNestedInput {
  create?: UserCreateWithoutEventsInput | undefined;
  connectOrCreate?: UserCreateOrConnectWithoutEventsInput | undefined;
  upsert?: UserUpsertWithoutEventsInput | undefined;
  connect?: UserWhereUniqueInput | undefined;
  update?: UserUpdateWithoutEventsInput | undefined;
}
