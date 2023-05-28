import { EventOrderByWithAggregationInput } from "../../../inputs/EventOrderByWithAggregationInput";
import { EventScalarWhereWithAggregatesInput } from "../../../inputs/EventScalarWhereWithAggregatesInput";
import { EventWhereInput } from "../../../inputs/EventWhereInput";
export declare class GroupByEventArgs {
  where?: EventWhereInput | undefined;
  orderBy?: EventOrderByWithAggregationInput[] | undefined;
  by: Array<
    | "id"
    | "userId"
    | "name"
    | "description"
    | "organizer"
    | "type"
    | "category"
    | "tags"
    | "banner"
    | "slug"
    | "eventStarts"
    | "eventEnds"
    | "createdAt"
    | "updatedAt"
  >;
  having?: EventScalarWhereWithAggregatesInput | undefined;
  take?: number | undefined;
  skip?: number | undefined;
}
