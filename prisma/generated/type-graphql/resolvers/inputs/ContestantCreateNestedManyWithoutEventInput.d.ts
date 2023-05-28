import { ContestantCreateManyEventInputEnvelope } from "../inputs/ContestantCreateManyEventInputEnvelope";
import { ContestantCreateOrConnectWithoutEventInput } from "../inputs/ContestantCreateOrConnectWithoutEventInput";
import { ContestantCreateWithoutEventInput } from "../inputs/ContestantCreateWithoutEventInput";
import { ContestantWhereUniqueInput } from "../inputs/ContestantWhereUniqueInput";
export declare class ContestantCreateNestedManyWithoutEventInput {
  create?: ContestantCreateWithoutEventInput[] | undefined;
  connectOrCreate?: ContestantCreateOrConnectWithoutEventInput[] | undefined;
  createMany?: ContestantCreateManyEventInputEnvelope | undefined;
  connect?: ContestantWhereUniqueInput[] | undefined;
}
