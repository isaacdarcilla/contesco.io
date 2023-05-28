import { UserCreateOrConnectWithoutEventsInput } from "../inputs/UserCreateOrConnectWithoutEventsInput";
import { UserCreateWithoutEventsInput } from "../inputs/UserCreateWithoutEventsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutEventsInput {
  create?: UserCreateWithoutEventsInput | undefined;
  connectOrCreate?: UserCreateOrConnectWithoutEventsInput | undefined;
  connect?: UserWhereUniqueInput | undefined;
}
