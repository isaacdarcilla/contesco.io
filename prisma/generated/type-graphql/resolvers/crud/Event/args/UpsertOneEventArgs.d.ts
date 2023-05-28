import { EventCreateInput } from "../../../inputs/EventCreateInput";
import { EventUpdateInput } from "../../../inputs/EventUpdateInput";
import { EventWhereUniqueInput } from "../../../inputs/EventWhereUniqueInput";
export declare class UpsertOneEventArgs {
  where: EventWhereUniqueInput;
  create: EventCreateInput;
  update: EventUpdateInput;
}
