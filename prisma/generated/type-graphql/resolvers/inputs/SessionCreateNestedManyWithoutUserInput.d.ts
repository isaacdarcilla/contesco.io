import { SessionCreateManyUserInputEnvelope } from "../inputs/SessionCreateManyUserInputEnvelope";
import { SessionCreateOrConnectWithoutUserInput } from "../inputs/SessionCreateOrConnectWithoutUserInput";
import { SessionCreateWithoutUserInput } from "../inputs/SessionCreateWithoutUserInput";
import { SessionWhereUniqueInput } from "../inputs/SessionWhereUniqueInput";
export declare class SessionCreateNestedManyWithoutUserInput {
  create?: SessionCreateWithoutUserInput[] | undefined;
  connectOrCreate?: SessionCreateOrConnectWithoutUserInput[] | undefined;
  createMany?: SessionCreateManyUserInputEnvelope | undefined;
  connect?: SessionWhereUniqueInput[] | undefined;
}
