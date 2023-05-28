import { EventCreateOrConnectWithoutContestantsInput } from "../inputs/EventCreateOrConnectWithoutContestantsInput";
import { EventCreateWithoutContestantsInput } from "../inputs/EventCreateWithoutContestantsInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";
export declare class EventCreateNestedOneWithoutContestantsInput {
  create?: EventCreateWithoutContestantsInput | undefined;
  connectOrCreate?: EventCreateOrConnectWithoutContestantsInput | undefined;
  connect?: EventWhereUniqueInput | undefined;
}
