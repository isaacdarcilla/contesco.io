import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class EventScalarWhereInput {
  AND?: EventScalarWhereInput[] | undefined;
  OR?: EventScalarWhereInput[] | undefined;
  NOT?: EventScalarWhereInput[] | undefined;
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
}
