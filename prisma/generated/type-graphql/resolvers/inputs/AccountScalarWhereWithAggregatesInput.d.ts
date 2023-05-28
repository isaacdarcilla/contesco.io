import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class AccountScalarWhereWithAggregatesInput {
  AND?: AccountScalarWhereWithAggregatesInput[] | undefined;
  OR?: AccountScalarWhereWithAggregatesInput[] | undefined;
  NOT?: AccountScalarWhereWithAggregatesInput[] | undefined;
  id?: StringWithAggregatesFilter | undefined;
  userId?: StringWithAggregatesFilter | undefined;
  type?: StringWithAggregatesFilter | undefined;
  provider?: StringWithAggregatesFilter | undefined;
  providerAccountId?: StringWithAggregatesFilter | undefined;
  refresh_token?: StringNullableWithAggregatesFilter | undefined;
  access_token?: StringNullableWithAggregatesFilter | undefined;
  expires_at?: IntNullableWithAggregatesFilter | undefined;
  token_type?: StringNullableWithAggregatesFilter | undefined;
  scope?: StringNullableWithAggregatesFilter | undefined;
  id_token?: StringNullableWithAggregatesFilter | undefined;
  session_state?: StringNullableWithAggregatesFilter | undefined;
}
