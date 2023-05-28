import { SessionOrderByWithRelationInput } from "../../../inputs/SessionOrderByWithRelationInput";
import { SessionWhereInput } from "../../../inputs/SessionWhereInput";
import { SessionWhereUniqueInput } from "../../../inputs/SessionWhereUniqueInput";
export declare class AggregateSessionArgs {
  where?: SessionWhereInput | undefined;
  orderBy?: SessionOrderByWithRelationInput[] | undefined;
  cursor?: SessionWhereUniqueInput | undefined;
  take?: number | undefined;
  skip?: number | undefined;
}
