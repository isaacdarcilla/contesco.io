import { EventCountOrderByAggregateInput } from "../inputs/EventCountOrderByAggregateInput";
import { EventMaxOrderByAggregateInput } from "../inputs/EventMaxOrderByAggregateInput";
import { EventMinOrderByAggregateInput } from "../inputs/EventMinOrderByAggregateInput";
export declare class EventOrderByWithAggregationInput {
  id?: "asc" | "desc" | undefined;
  userId?: "asc" | "desc" | undefined;
  name?: "asc" | "desc" | undefined;
  description?: "asc" | "desc" | undefined;
  organizer?: "asc" | "desc" | undefined;
  type?: "asc" | "desc" | undefined;
  category?: "asc" | "desc" | undefined;
  tags?: "asc" | "desc" | undefined;
  banner?: "asc" | "desc" | undefined;
  slug?: "asc" | "desc" | undefined;
  eventStarts?: "asc" | "desc" | undefined;
  eventEnds?: "asc" | "desc" | undefined;
  createdAt?: "asc" | "desc" | undefined;
  updatedAt?: "asc" | "desc" | undefined;
  _count?: EventCountOrderByAggregateInput | undefined;
  _max?: EventMaxOrderByAggregateInput | undefined;
  _min?: EventMinOrderByAggregateInput | undefined;
}
