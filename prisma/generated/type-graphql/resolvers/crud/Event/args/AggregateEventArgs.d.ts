import { EventOrderByWithRelationInput } from "../../../inputs/EventOrderByWithRelationInput";
import { EventWhereInput } from "../../../inputs/EventWhereInput";
import { EventWhereUniqueInput } from "../../../inputs/EventWhereUniqueInput";
export declare class AggregateEventArgs {
  where?: EventWhereInput | undefined;
  orderBy?: EventOrderByWithRelationInput[] | undefined;
  cursor?: EventWhereUniqueInput | undefined;
  take?: number | undefined;
  skip?: number | undefined;
}
