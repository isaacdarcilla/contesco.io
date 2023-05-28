import { ContestantCreateManyUserInputEnvelope } from "../inputs/ContestantCreateManyUserInputEnvelope";
import { ContestantCreateOrConnectWithoutUserInput } from "../inputs/ContestantCreateOrConnectWithoutUserInput";
import { ContestantCreateWithoutUserInput } from "../inputs/ContestantCreateWithoutUserInput";
import { ContestantScalarWhereInput } from "../inputs/ContestantScalarWhereInput";
import { ContestantUpdateManyWithWhereWithoutUserInput } from "../inputs/ContestantUpdateManyWithWhereWithoutUserInput";
import { ContestantUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ContestantUpdateWithWhereUniqueWithoutUserInput";
import { ContestantUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ContestantUpsertWithWhereUniqueWithoutUserInput";
import { ContestantWhereUniqueInput } from "../inputs/ContestantWhereUniqueInput";
export declare class ContestantUpdateManyWithoutUserNestedInput {
  create?: ContestantCreateWithoutUserInput[] | undefined;
  connectOrCreate?: ContestantCreateOrConnectWithoutUserInput[] | undefined;
  upsert?: ContestantUpsertWithWhereUniqueWithoutUserInput[] | undefined;
  createMany?: ContestantCreateManyUserInputEnvelope | undefined;
  set?: ContestantWhereUniqueInput[] | undefined;
  disconnect?: ContestantWhereUniqueInput[] | undefined;
  delete?: ContestantWhereUniqueInput[] | undefined;
  connect?: ContestantWhereUniqueInput[] | undefined;
  update?: ContestantUpdateWithWhereUniqueWithoutUserInput[] | undefined;
  updateMany?: ContestantUpdateManyWithWhereWithoutUserInput[] | undefined;
  deleteMany?: ContestantScalarWhereInput[] | undefined;
}
