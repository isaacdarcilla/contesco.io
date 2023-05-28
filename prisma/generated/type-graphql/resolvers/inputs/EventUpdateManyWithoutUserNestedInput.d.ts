import { EventCreateManyUserInputEnvelope } from "../inputs/EventCreateManyUserInputEnvelope";
import { EventCreateOrConnectWithoutUserInput } from "../inputs/EventCreateOrConnectWithoutUserInput";
import { EventCreateWithoutUserInput } from "../inputs/EventCreateWithoutUserInput";
import { EventScalarWhereInput } from "../inputs/EventScalarWhereInput";
import { EventUpdateManyWithWhereWithoutUserInput } from "../inputs/EventUpdateManyWithWhereWithoutUserInput";
import { EventUpdateWithWhereUniqueWithoutUserInput } from "../inputs/EventUpdateWithWhereUniqueWithoutUserInput";
import { EventUpsertWithWhereUniqueWithoutUserInput } from "../inputs/EventUpsertWithWhereUniqueWithoutUserInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";
export declare class EventUpdateManyWithoutUserNestedInput {
  create?: EventCreateWithoutUserInput[] | undefined;
  connectOrCreate?: EventCreateOrConnectWithoutUserInput[] | undefined;
  upsert?: EventUpsertWithWhereUniqueWithoutUserInput[] | undefined;
  createMany?: EventCreateManyUserInputEnvelope | undefined;
  set?: EventWhereUniqueInput[] | undefined;
  disconnect?: EventWhereUniqueInput[] | undefined;
  delete?: EventWhereUniqueInput[] | undefined;
  connect?: EventWhereUniqueInput[] | undefined;
  update?: EventUpdateWithWhereUniqueWithoutUserInput[] | undefined;
  updateMany?: EventUpdateManyWithWhereWithoutUserInput[] | undefined;
  deleteMany?: EventScalarWhereInput[] | undefined;
}
