import { VerificationTokenOrderByWithRelationInput } from "../../../inputs/VerificationTokenOrderByWithRelationInput";
import { VerificationTokenWhereInput } from "../../../inputs/VerificationTokenWhereInput";
import { VerificationTokenWhereUniqueInput } from "../../../inputs/VerificationTokenWhereUniqueInput";
export declare class AggregateVerificationTokenArgs {
  where?: VerificationTokenWhereInput | undefined;
  orderBy?: VerificationTokenOrderByWithRelationInput[] | undefined;
  cursor?: VerificationTokenWhereUniqueInput | undefined;
  take?: number | undefined;
  skip?: number | undefined;
}
