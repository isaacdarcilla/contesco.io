import { ContestantCreateManyUserInputEnvelope } from "../inputs/ContestantCreateManyUserInputEnvelope";
import { ContestantCreateOrConnectWithoutUserInput } from "../inputs/ContestantCreateOrConnectWithoutUserInput";
import { ContestantCreateWithoutUserInput } from "../inputs/ContestantCreateWithoutUserInput";
import { ContestantWhereUniqueInput } from "../inputs/ContestantWhereUniqueInput";
export declare class ContestantCreateNestedManyWithoutUserInput {
  create?: ContestantCreateWithoutUserInput[] | undefined;
  connectOrCreate?: ContestantCreateOrConnectWithoutUserInput[] | undefined;
  createMany?: ContestantCreateManyUserInputEnvelope | undefined;
  connect?: ContestantWhereUniqueInput[] | undefined;
}
