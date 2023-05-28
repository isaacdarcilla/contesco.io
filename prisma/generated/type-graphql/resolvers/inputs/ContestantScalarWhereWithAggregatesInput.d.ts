import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ContestantScalarWhereWithAggregatesInput {
  AND?: ContestantScalarWhereWithAggregatesInput[] | undefined;
  OR?: ContestantScalarWhereWithAggregatesInput[] | undefined;
  NOT?: ContestantScalarWhereWithAggregatesInput[] | undefined;
  id?: StringWithAggregatesFilter | undefined;
  eventId?: StringWithAggregatesFilter | undefined;
  userId?: StringWithAggregatesFilter | undefined;
  firstName?: StringWithAggregatesFilter | undefined;
  middleName?: StringNullableWithAggregatesFilter | undefined;
  lastName?: StringWithAggregatesFilter | undefined;
  gender?: StringWithAggregatesFilter | undefined;
  age?: IntWithAggregatesFilter | undefined;
  nationality?: StringNullableWithAggregatesFilter | undefined;
  birthDate?: StringNullableWithAggregatesFilter | undefined;
  phoneNumber?: StringWithAggregatesFilter | undefined;
  email?: StringWithAggregatesFilter | undefined;
  photo?: StringNullableWithAggregatesFilter | undefined;
  createdAt?: DateTimeNullableWithAggregatesFilter | undefined;
  updatedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
