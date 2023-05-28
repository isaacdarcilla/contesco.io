import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class EventScalarWhereWithAggregatesInput {
  AND?: EventScalarWhereWithAggregatesInput[] | undefined;
  OR?: EventScalarWhereWithAggregatesInput[] | undefined;
  NOT?: EventScalarWhereWithAggregatesInput[] | undefined;
  id?: StringWithAggregatesFilter | undefined;
  userId?: StringWithAggregatesFilter | undefined;
  name?: StringWithAggregatesFilter | undefined;
  description?: StringWithAggregatesFilter | undefined;
  organizer?: StringWithAggregatesFilter | undefined;
  type?: StringNullableWithAggregatesFilter | undefined;
  category?: StringWithAggregatesFilter | undefined;
  tags?: StringNullableWithAggregatesFilter | undefined;
  banner?: StringNullableWithAggregatesFilter | undefined;
  slug?: StringNullableWithAggregatesFilter | undefined;
  eventStarts?: DateTimeNullableWithAggregatesFilter | undefined;
  eventEnds?: DateTimeNullableWithAggregatesFilter | undefined;
  createdAt?: DateTimeNullableWithAggregatesFilter | undefined;
  updatedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
