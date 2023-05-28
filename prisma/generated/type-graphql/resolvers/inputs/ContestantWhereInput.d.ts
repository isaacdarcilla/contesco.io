import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EventRelationFilter } from "../inputs/EventRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class ContestantWhereInput {
  AND?: ContestantWhereInput[] | undefined;
  OR?: ContestantWhereInput[] | undefined;
  NOT?: ContestantWhereInput[] | undefined;
  id?: StringFilter | undefined;
  eventId?: StringFilter | undefined;
  userId?: StringFilter | undefined;
  firstName?: StringFilter | undefined;
  middleName?: StringNullableFilter | undefined;
  lastName?: StringFilter | undefined;
  gender?: StringFilter | undefined;
  age?: IntFilter | undefined;
  nationality?: StringNullableFilter | undefined;
  birthDate?: StringNullableFilter | undefined;
  phoneNumber?: StringFilter | undefined;
  email?: StringFilter | undefined;
  photo?: StringNullableFilter | undefined;
  createdAt?: DateTimeNullableFilter | undefined;
  updatedAt?: DateTimeNullableFilter | undefined;
  event?: EventRelationFilter | undefined;
  user?: UserRelationFilter | undefined;
}
