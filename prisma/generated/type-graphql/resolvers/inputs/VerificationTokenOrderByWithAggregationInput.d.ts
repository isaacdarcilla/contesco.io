import { VerificationTokenCountOrderByAggregateInput } from "../inputs/VerificationTokenCountOrderByAggregateInput";
import { VerificationTokenMaxOrderByAggregateInput } from "../inputs/VerificationTokenMaxOrderByAggregateInput";
import { VerificationTokenMinOrderByAggregateInput } from "../inputs/VerificationTokenMinOrderByAggregateInput";
export declare class VerificationTokenOrderByWithAggregationInput {
  identifier?: "asc" | "desc" | undefined;
  token?: "asc" | "desc" | undefined;
  expires?: "asc" | "desc" | undefined;
  _count?: VerificationTokenCountOrderByAggregateInput | undefined;
  _max?: VerificationTokenMaxOrderByAggregateInput | undefined;
  _min?: VerificationTokenMinOrderByAggregateInput | undefined;
}
