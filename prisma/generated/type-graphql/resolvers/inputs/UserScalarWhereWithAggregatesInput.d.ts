import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { EnumUserRoleWithAggregatesFilter } from "../inputs/EnumUserRoleWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UserScalarWhereWithAggregatesInput {
  AND?: UserScalarWhereWithAggregatesInput[] | undefined;
  OR?: UserScalarWhereWithAggregatesInput[] | undefined;
  NOT?: UserScalarWhereWithAggregatesInput[] | undefined;
  id?: StringWithAggregatesFilter | undefined;
  name?: StringNullableWithAggregatesFilter | undefined;
  email?: StringWithAggregatesFilter | undefined;
  emailVerified?: DateTimeNullableWithAggregatesFilter | undefined;
  image?: StringNullableWithAggregatesFilter | undefined;
  role?: EnumUserRoleWithAggregatesFilter | undefined;
  createdAt?: DateTimeNullableWithAggregatesFilter | undefined;
  updatedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
