import { ContestantOrderByWithRelationInput } from "../../../inputs/ContestantOrderByWithRelationInput";
import { ContestantWhereInput } from "../../../inputs/ContestantWhereInput";
import { ContestantWhereUniqueInput } from "../../../inputs/ContestantWhereUniqueInput";
export declare class AggregateContestantArgs {
  where?: ContestantWhereInput | undefined;
  orderBy?: ContestantOrderByWithRelationInput[] | undefined;
  cursor?: ContestantWhereUniqueInput | undefined;
  take?: number | undefined;
  skip?: number | undefined;
}
