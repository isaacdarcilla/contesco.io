import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class VerificationTokenWhereInput {
  AND?: VerificationTokenWhereInput[] | undefined;
  OR?: VerificationTokenWhereInput[] | undefined;
  NOT?: VerificationTokenWhereInput[] | undefined;
  identifier?: StringFilter | undefined;
  token?: StringFilter | undefined;
  expires?: DateTimeFilter | undefined;
}
