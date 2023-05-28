import { UserCountOrderByAggregateInput } from "../inputs/UserCountOrderByAggregateInput";
import { UserMaxOrderByAggregateInput } from "../inputs/UserMaxOrderByAggregateInput";
import { UserMinOrderByAggregateInput } from "../inputs/UserMinOrderByAggregateInput";
export declare class UserOrderByWithAggregationInput {
  id?: "asc" | "desc" | undefined;
  name?: "asc" | "desc" | undefined;
  email?: "asc" | "desc" | undefined;
  emailVerified?: "asc" | "desc" | undefined;
  image?: "asc" | "desc" | undefined;
  role?: "asc" | "desc" | undefined;
  createdAt?: "asc" | "desc" | undefined;
  updatedAt?: "asc" | "desc" | undefined;
  _count?: UserCountOrderByAggregateInput | undefined;
  _max?: UserMaxOrderByAggregateInput | undefined;
  _min?: UserMinOrderByAggregateInput | undefined;
}
