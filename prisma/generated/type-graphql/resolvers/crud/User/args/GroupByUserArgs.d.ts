import { UserOrderByWithAggregationInput } from "../../../inputs/UserOrderByWithAggregationInput";
import { UserScalarWhereWithAggregatesInput } from "../../../inputs/UserScalarWhereWithAggregatesInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
export declare class GroupByUserArgs {
  where?: UserWhereInput | undefined;
  orderBy?: UserOrderByWithAggregationInput[] | undefined;
  by: Array<
    | "id"
    | "name"
    | "email"
    | "emailVerified"
    | "image"
    | "role"
    | "createdAt"
    | "updatedAt"
  >;
  having?: UserScalarWhereWithAggregatesInput | undefined;
  take?: number | undefined;
  skip?: number | undefined;
}
