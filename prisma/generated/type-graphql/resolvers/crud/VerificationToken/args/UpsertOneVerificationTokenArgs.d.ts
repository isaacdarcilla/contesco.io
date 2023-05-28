import { VerificationTokenCreateInput } from "../../../inputs/VerificationTokenCreateInput";
import { VerificationTokenUpdateInput } from "../../../inputs/VerificationTokenUpdateInput";
import { VerificationTokenWhereUniqueInput } from "../../../inputs/VerificationTokenWhereUniqueInput";
export declare class UpsertOneVerificationTokenArgs {
  where: VerificationTokenWhereUniqueInput;
  create: VerificationTokenCreateInput;
  update: VerificationTokenUpdateInput;
}
