import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class VerificationTokenScalarWhereWithAggregatesInput {
  AND?: VerificationTokenScalarWhereWithAggregatesInput[] | undefined;
  OR?: VerificationTokenScalarWhereWithAggregatesInput[] | undefined;
  NOT?: VerificationTokenScalarWhereWithAggregatesInput[] | undefined;
  identifier?: StringWithAggregatesFilter | undefined;
  token?: StringWithAggregatesFilter | undefined;
  expires?: DateTimeWithAggregatesFilter | undefined;
}
