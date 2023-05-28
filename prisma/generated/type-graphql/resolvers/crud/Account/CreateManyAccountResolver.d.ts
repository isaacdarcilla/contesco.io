import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAccountArgs } from "./args/CreateManyAccountArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyAccountResolver {
  createManyAccount(
    ctx: any,
    info: GraphQLResolveInfo,
    args: CreateManyAccountArgs
  ): Promise<AffectedRowsOutput>;
}
