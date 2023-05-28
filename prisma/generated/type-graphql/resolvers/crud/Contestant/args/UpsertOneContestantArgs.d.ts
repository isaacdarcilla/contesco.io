import { ContestantCreateInput } from "../../../inputs/ContestantCreateInput";
import { ContestantUpdateInput } from "../../../inputs/ContestantUpdateInput";
import { ContestantWhereUniqueInput } from "../../../inputs/ContestantWhereUniqueInput";
export declare class UpsertOneContestantArgs {
  where: ContestantWhereUniqueInput;
  create: ContestantCreateInput;
  update: ContestantUpdateInput;
}
