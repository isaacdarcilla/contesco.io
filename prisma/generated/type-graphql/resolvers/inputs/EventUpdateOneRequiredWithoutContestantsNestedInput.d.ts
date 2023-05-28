import { EventCreateOrConnectWithoutContestantsInput } from "../inputs/EventCreateOrConnectWithoutContestantsInput";
import { EventCreateWithoutContestantsInput } from "../inputs/EventCreateWithoutContestantsInput";
import { EventUpdateWithoutContestantsInput } from "../inputs/EventUpdateWithoutContestantsInput";
import { EventUpsertWithoutContestantsInput } from "../inputs/EventUpsertWithoutContestantsInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";
export declare class EventUpdateOneRequiredWithoutContestantsNestedInput {
  create?: EventCreateWithoutContestantsInput | undefined;
  connectOrCreate?: EventCreateOrConnectWithoutContestantsInput | undefined;
  upsert?: EventUpsertWithoutContestantsInput | undefined;
  connect?: EventWhereUniqueInput | undefined;
  update?: EventUpdateWithoutContestantsInput | undefined;
}
