import { VerificationTokenOrderByWithAggregationInput } from "../../../inputs/VerificationTokenOrderByWithAggregationInput";
import { VerificationTokenScalarWhereWithAggregatesInput } from "../../../inputs/VerificationTokenScalarWhereWithAggregatesInput";
import { VerificationTokenWhereInput } from "../../../inputs/VerificationTokenWhereInput";
export declare class GroupByVerificationTokenArgs {
  where?: VerificationTokenWhereInput | undefined;
  orderBy?: VerificationTokenOrderByWithAggregationInput[] | undefined;
  by: Array<"identifier" | "token" | "expires">;
  having?: VerificationTokenScalarWhereWithAggregatesInput | undefined;
  take?: number | undefined;
  skip?: number | undefined;
}
