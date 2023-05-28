import { AccountCreateManyUserInputEnvelope } from "../inputs/AccountCreateManyUserInputEnvelope";
import { AccountCreateOrConnectWithoutUserInput } from "../inputs/AccountCreateOrConnectWithoutUserInput";
import { AccountCreateWithoutUserInput } from "../inputs/AccountCreateWithoutUserInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";
export declare class AccountCreateNestedManyWithoutUserInput {
  create?: AccountCreateWithoutUserInput[] | undefined;
  connectOrCreate?: AccountCreateOrConnectWithoutUserInput[] | undefined;
  createMany?: AccountCreateManyUserInputEnvelope | undefined;
  connect?: AccountWhereUniqueInput[] | undefined;
}
