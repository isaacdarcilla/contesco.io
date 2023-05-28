import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class AccountScalarWhereInput {
  AND?: AccountScalarWhereInput[] | undefined;
  OR?: AccountScalarWhereInput[] | undefined;
  NOT?: AccountScalarWhereInput[] | undefined;
  id?: StringFilter | undefined;
  userId?: StringFilter | undefined;
  type?: StringFilter | undefined;
  provider?: StringFilter | undefined;
  providerAccountId?: StringFilter | undefined;
  refresh_token?: StringNullableFilter | undefined;
  access_token?: StringNullableFilter | undefined;
  expires_at?: IntNullableFilter | undefined;
  token_type?: StringNullableFilter | undefined;
  scope?: StringNullableFilter | undefined;
  id_token?: StringNullableFilter | undefined;
  session_state?: StringNullableFilter | undefined;
}
