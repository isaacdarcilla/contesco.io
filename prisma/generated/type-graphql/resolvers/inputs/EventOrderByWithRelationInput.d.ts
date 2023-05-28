import { ContestantOrderByRelationAggregateInput } from "../inputs/ContestantOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class EventOrderByWithRelationInput {
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
  contestants?: ContestantOrderByRelationAggregateInput | undefined;
  user?: UserOrderByWithRelationInput | undefined;
}
