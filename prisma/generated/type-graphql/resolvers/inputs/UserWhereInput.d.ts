import { AccountListRelationFilter } from "../inputs/AccountListRelationFilter";
import { ContestantListRelationFilter } from "../inputs/ContestantListRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumUserRoleFilter } from "../inputs/EnumUserRoleFilter";
import { EventListRelationFilter } from "../inputs/EventListRelationFilter";
import { SessionListRelationFilter } from "../inputs/SessionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UserWhereInput {
  AND?: UserWhereInput[] | undefined;
  OR?: UserWhereInput[] | undefined;
  NOT?: UserWhereInput[] | undefined;
  id?: StringFilter | undefined;
  name?: StringNullableFilter | undefined;
  email?: StringFilter | undefined;
  emailVerified?: DateTimeNullableFilter | undefined;
  image?: StringNullableFilter | undefined;
  role?: EnumUserRoleFilter | undefined;
  createdAt?: DateTimeNullableFilter | undefined;
  updatedAt?: DateTimeNullableFilter | undefined;
  accounts?: AccountListRelationFilter | undefined;
  sessions?: SessionListRelationFilter | undefined;
  events?: EventListRelationFilter | undefined;
  Contestant?: ContestantListRelationFilter | undefined;
}
