import { EventCreateManyUserInputEnvelope } from "../inputs/EventCreateManyUserInputEnvelope";
import { EventCreateOrConnectWithoutUserInput } from "../inputs/EventCreateOrConnectWithoutUserInput";
import { EventCreateWithoutUserInput } from "../inputs/EventCreateWithoutUserInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";
export declare class EventCreateNestedManyWithoutUserInput {
  create?: EventCreateWithoutUserInput[] | undefined;
  connectOrCreate?: EventCreateOrConnectWithoutUserInput[] | undefined;
  createMany?: EventCreateManyUserInputEnvelope | undefined;
  connect?: EventWhereUniqueInput[] | undefined;
}
