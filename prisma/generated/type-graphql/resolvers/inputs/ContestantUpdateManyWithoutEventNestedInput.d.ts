import { ContestantCreateManyEventInputEnvelope } from "../inputs/ContestantCreateManyEventInputEnvelope";
import { ContestantCreateOrConnectWithoutEventInput } from "../inputs/ContestantCreateOrConnectWithoutEventInput";
import { ContestantCreateWithoutEventInput } from "../inputs/ContestantCreateWithoutEventInput";
import { ContestantScalarWhereInput } from "../inputs/ContestantScalarWhereInput";
import { ContestantUpdateManyWithWhereWithoutEventInput } from "../inputs/ContestantUpdateManyWithWhereWithoutEventInput";
import { ContestantUpdateWithWhereUniqueWithoutEventInput } from "../inputs/ContestantUpdateWithWhereUniqueWithoutEventInput";
import { ContestantUpsertWithWhereUniqueWithoutEventInput } from "../inputs/ContestantUpsertWithWhereUniqueWithoutEventInput";
import { ContestantWhereUniqueInput } from "../inputs/ContestantWhereUniqueInput";
export declare class ContestantUpdateManyWithoutEventNestedInput {
  create?: ContestantCreateWithoutEventInput[] | undefined;
  connectOrCreate?: ContestantCreateOrConnectWithoutEventInput[] | undefined;
  upsert?: ContestantUpsertWithWhereUniqueWithoutEventInput[] | undefined;
  createMany?: ContestantCreateManyEventInputEnvelope | undefined;
  set?: ContestantWhereUniqueInput[] | undefined;
  disconnect?: ContestantWhereUniqueInput[] | undefined;
  delete?: ContestantWhereUniqueInput[] | undefined;
  connect?: ContestantWhereUniqueInput[] | undefined;
  update?: ContestantUpdateWithWhereUniqueWithoutEventInput[] | undefined;
  updateMany?: ContestantUpdateManyWithWhereWithoutEventInput[] | undefined;
  deleteMany?: ContestantScalarWhereInput[] | undefined;
}
