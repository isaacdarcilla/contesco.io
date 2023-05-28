import type { GraphQLResolveInfo } from "graphql";
import { CreateManySessionArgs } from "./args/CreateManySessionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySessionResolver {
  createManySession(
    ctx: any,
    info: GraphQLResolveInfo,
    args: CreateManySessionArgs
  ): Promise<AffectedRowsOutput>;
}
