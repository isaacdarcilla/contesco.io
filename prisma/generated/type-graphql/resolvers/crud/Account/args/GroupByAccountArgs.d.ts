import { AccountOrderByWithAggregationInput } from "../../../inputs/AccountOrderByWithAggregationInput";
import { AccountScalarWhereWithAggregatesInput } from "../../../inputs/AccountScalarWhereWithAggregatesInput";
import { AccountWhereInput } from "../../../inputs/AccountWhereInput";
export declare class GroupByAccountArgs {
  where?: AccountWhereInput | undefined;
  orderBy?: AccountOrderByWithAggregationInput[] | undefined;
  by: Array<
    | "id"
    | "userId"
    | "type"
    | "provider"
    | "providerAccountId"
    | "refresh_token"
    | "access_token"
    | "expires_at"
    | "token_type"
    | "scope"
    | "id_token"
    | "session_state"
  >;
  having?: AccountScalarWhereWithAggregatesInput | undefined;
  take?: number | undefined;
  skip?: number | undefined;
}
