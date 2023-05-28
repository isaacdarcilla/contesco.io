import { ContestantAvgOrderByAggregateInput } from "../inputs/ContestantAvgOrderByAggregateInput";
import { ContestantCountOrderByAggregateInput } from "../inputs/ContestantCountOrderByAggregateInput";
import { ContestantMaxOrderByAggregateInput } from "../inputs/ContestantMaxOrderByAggregateInput";
import { ContestantMinOrderByAggregateInput } from "../inputs/ContestantMinOrderByAggregateInput";
import { ContestantSumOrderByAggregateInput } from "../inputs/ContestantSumOrderByAggregateInput";
export declare class ContestantOrderByWithAggregationInput {
  id?: "asc" | "desc" | undefined;
  eventId?: "asc" | "desc" | undefined;
  userId?: "asc" | "desc" | undefined;
  firstName?: "asc" | "desc" | undefined;
  middleName?: "asc" | "desc" | undefined;
  lastName?: "asc" | "desc" | undefined;
  gender?: "asc" | "desc" | undefined;
  age?: "asc" | "desc" | undefined;
  nationality?: "asc" | "desc" | undefined;
  birthDate?: "asc" | "desc" | undefined;
  phoneNumber?: "asc" | "desc" | undefined;
  email?: "asc" | "desc" | undefined;
  photo?: "asc" | "desc" | undefined;
  createdAt?: "asc" | "desc" | undefined;
  updatedAt?: "asc" | "desc" | undefined;
  _count?: ContestantCountOrderByAggregateInput | undefined;
  _avg?: ContestantAvgOrderByAggregateInput | undefined;
  _max?: ContestantMaxOrderByAggregateInput | undefined;
  _min?: ContestantMinOrderByAggregateInput | undefined;
  _sum?: ContestantSumOrderByAggregateInput | undefined;
}
