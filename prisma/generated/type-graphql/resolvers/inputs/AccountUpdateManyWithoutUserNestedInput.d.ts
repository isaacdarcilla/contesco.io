import { AccountCreateManyUserInputEnvelope } from "../inputs/AccountCreateManyUserInputEnvelope";
import { AccountCreateOrConnectWithoutUserInput } from "../inputs/AccountCreateOrConnectWithoutUserInput";
import { AccountCreateWithoutUserInput } from "../inputs/AccountCreateWithoutUserInput";
import { AccountScalarWhereInput } from "../inputs/AccountScalarWhereInput";
import { AccountUpdateManyWithWhereWithoutUserInput } from "../inputs/AccountUpdateManyWithWhereWithoutUserInput";
import { AccountUpdateWithWhereUniqueWithoutUserInput } from "../inputs/AccountUpdateWithWhereUniqueWithoutUserInput";
import { AccountUpsertWithWhereUniqueWithoutUserInput } from "../inputs/AccountUpsertWithWhereUniqueWithoutUserInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";
export declare class AccountUpdateManyWithoutUserNestedInput {
  create?: AccountCreateWithoutUserInput[] | undefined;
  connectOrCreate?: AccountCreateOrConnectWithoutUserInput[] | undefined;
  upsert?: AccountUpsertWithWhereUniqueWithoutUserInput[] | undefined;
  createMany?: AccountCreateManyUserInputEnvelope | undefined;
  set?: AccountWhereUniqueInput[] | undefined;
  disconnect?: AccountWhereUniqueInput[] | undefined;
  delete?: AccountWhereUniqueInput[] | undefined;
  connect?: AccountWhereUniqueInput[] | undefined;
  update?: AccountUpdateWithWhereUniqueWithoutUserInput[] | undefined;
  updateMany?: AccountUpdateManyWithWhereWithoutUserInput[] | undefined;
  deleteMany?: AccountScalarWhereInput[] | undefined;
}
