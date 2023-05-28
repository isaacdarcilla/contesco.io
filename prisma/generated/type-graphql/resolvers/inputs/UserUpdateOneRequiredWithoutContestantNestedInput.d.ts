import { UserCreateOrConnectWithoutContestantInput } from "../inputs/UserCreateOrConnectWithoutContestantInput";
import { UserCreateWithoutContestantInput } from "../inputs/UserCreateWithoutContestantInput";
import { UserUpdateWithoutContestantInput } from "../inputs/UserUpdateWithoutContestantInput";
import { UserUpsertWithoutContestantInput } from "../inputs/UserUpsertWithoutContestantInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutContestantNestedInput {
  create?: UserCreateWithoutContestantInput | undefined;
  connectOrCreate?: UserCreateOrConnectWithoutContestantInput | undefined;
  upsert?: UserUpsertWithoutContestantInput | undefined;
  connect?: UserWhereUniqueInput | undefined;
  update?: UserUpdateWithoutContestantInput | undefined;
}
