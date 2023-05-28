import { ContestantListRelationFilter } from "../inputs/ContestantListRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class EventWhereInput {
  AND?: EventWhereInput[] | undefined;
  OR?: EventWhereInput[] | undefined;
  NOT?: EventWhereInput[] | undefined;
  id?: StringFilter | undefined;
  userId?: StringFilter | undefined;
  name?: StringFilter | undefined;
  description?: StringFilter | undefined;
  organizer?: StringFilter | undefined;
  type?: StringNullableFilter | undefined;
  category?: StringFilter | undefined;
  tags?: StringNullableFilter | undefined;
  banner?: StringNullableFilter | undefined;
  slug?: StringNullableFilter | undefined;
  eventStarts?: DateTimeNullableFilter | undefined;
  eventEnds?: DateTimeNullableFilter | undefined;
  createdAt?: DateTimeNullableFilter | undefined;
  updatedAt?: DateTimeNullableFilter | undefined;
  contestants?: ContestantListRelationFilter | undefined;
  user?: UserRelationFilter | undefined;
}
