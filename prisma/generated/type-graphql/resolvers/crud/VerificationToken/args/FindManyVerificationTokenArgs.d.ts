import { VerificationTokenOrderByWithRelationInput } from "../../../inputs/VerificationTokenOrderByWithRelationInput";
import { VerificationTokenWhereInput } from "../../../inputs/VerificationTokenWhereInput";
import { VerificationTokenWhereUniqueInput } from "../../../inputs/VerificationTokenWhereUniqueInput";
export declare class FindManyVerificationTokenArgs {
  where?: VerificationTokenWhereInput | undefined;
  orderBy?: VerificationTokenOrderByWithRelationInput[] | undefined;
  cursor?: VerificationTokenWhereUniqueInput | undefined;
  take?: number | undefined;
  skip?: number | undefined;
  distinct?: Array<"identifier" | "token" | "expires"> | undefined;
}
