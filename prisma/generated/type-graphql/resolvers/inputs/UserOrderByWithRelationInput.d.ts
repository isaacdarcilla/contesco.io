import { AccountOrderByRelationAggregateInput } from "../inputs/AccountOrderByRelationAggregateInput";
import { ContestantOrderByRelationAggregateInput } from "../inputs/ContestantOrderByRelationAggregateInput";
import { EventOrderByRelationAggregateInput } from "../inputs/EventOrderByRelationAggregateInput";
import { SessionOrderByRelationAggregateInput } from "../inputs/SessionOrderByRelationAggregateInput";
export declare class UserOrderByWithRelationInput {
  id?: "asc" | "desc" | undefined;
  name?: "asc" | "desc" | undefined;
  email?: "asc" | "desc" | undefined;
  emailVerified?: "asc" | "desc" | undefined;
  image?: "asc" | "desc" | undefined;
  role?: "asc" | "desc" | undefined;
  createdAt?: "asc" | "desc" | undefined;
  updatedAt?: "asc" | "desc" | undefined;
  accounts?: AccountOrderByRelationAggregateInput | undefined;
  sessions?: SessionOrderByRelationAggregateInput | undefined;
  events?: EventOrderByRelationAggregateInput | undefined;
  Contestant?: ContestantOrderByRelationAggregateInput | undefined;
}
