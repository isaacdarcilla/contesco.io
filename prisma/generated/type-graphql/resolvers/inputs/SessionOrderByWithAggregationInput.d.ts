import { SessionCountOrderByAggregateInput } from "../inputs/SessionCountOrderByAggregateInput";
import { SessionMaxOrderByAggregateInput } from "../inputs/SessionMaxOrderByAggregateInput";
import { SessionMinOrderByAggregateInput } from "../inputs/SessionMinOrderByAggregateInput";
export declare class SessionOrderByWithAggregationInput {
  id?: "asc" | "desc" | undefined;
  sessionToken?: "asc" | "desc" | undefined;
  userId?: "asc" | "desc" | undefined;
  expires?: "asc" | "desc" | undefined;
  _count?: SessionCountOrderByAggregateInput | undefined;
  _max?: SessionMaxOrderByAggregateInput | undefined;
  _min?: SessionMinOrderByAggregateInput | undefined;
}
