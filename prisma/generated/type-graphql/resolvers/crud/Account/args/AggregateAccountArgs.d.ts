import { AccountOrderByWithRelationInput } from "../../../inputs/AccountOrderByWithRelationInput";
import { AccountWhereInput } from "../../../inputs/AccountWhereInput";
import { AccountWhereUniqueInput } from "../../../inputs/AccountWhereUniqueInput";
export declare class AggregateAccountArgs {
  where?: AccountWhereInput | undefined;
  orderBy?: AccountOrderByWithRelationInput[] | undefined;
  cursor?: AccountWhereUniqueInput | undefined;
  take?: number | undefined;
  skip?: number | undefined;
}
