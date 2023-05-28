import { UserCreateOrConnectWithoutContestantInput } from "../inputs/UserCreateOrConnectWithoutContestantInput";
import { UserCreateWithoutContestantInput } from "../inputs/UserCreateWithoutContestantInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutContestantInput {
  create?: UserCreateWithoutContestantInput | undefined;
  connectOrCreate?: UserCreateOrConnectWithoutContestantInput | undefined;
  connect?: UserWhereUniqueInput | undefined;
}
