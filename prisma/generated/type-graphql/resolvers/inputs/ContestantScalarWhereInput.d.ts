import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ContestantScalarWhereInput {
  AND?: ContestantScalarWhereInput[] | undefined;
  OR?: ContestantScalarWhereInput[] | undefined;
  NOT?: ContestantScalarWhereInput[] | undefined;
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
}
