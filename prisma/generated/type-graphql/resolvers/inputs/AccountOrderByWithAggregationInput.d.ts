import { AccountAvgOrderByAggregateInput } from "../inputs/AccountAvgOrderByAggregateInput";
import { AccountCountOrderByAggregateInput } from "../inputs/AccountCountOrderByAggregateInput";
import { AccountMaxOrderByAggregateInput } from "../inputs/AccountMaxOrderByAggregateInput";
import { AccountMinOrderByAggregateInput } from "../inputs/AccountMinOrderByAggregateInput";
import { AccountSumOrderByAggregateInput } from "../inputs/AccountSumOrderByAggregateInput";
export declare class AccountOrderByWithAggregationInput {
  id?: "asc" | "desc" | undefined;
  userId?: "asc" | "desc" | undefined;
  type?: "asc" | "desc" | undefined;
  provider?: "asc" | "desc" | undefined;
  providerAccountId?: "asc" | "desc" | undefined;
  refresh_token?: "asc" | "desc" | undefined;
  access_token?: "asc" | "desc" | undefined;
  expires_at?: "asc" | "desc" | undefined;
  token_type?: "asc" | "desc" | undefined;
  scope?: "asc" | "desc" | undefined;
  id_token?: "asc" | "desc" | undefined;
  session_state?: "asc" | "desc" | undefined;
  _count?: AccountCountOrderByAggregateInput | undefined;
  _avg?: AccountAvgOrderByAggregateInput | undefined;
  _max?: AccountMaxOrderByAggregateInput | undefined;
  _min?: AccountMinOrderByAggregateInput | undefined;
  _sum?: AccountSumOrderByAggregateInput | undefined;
}
