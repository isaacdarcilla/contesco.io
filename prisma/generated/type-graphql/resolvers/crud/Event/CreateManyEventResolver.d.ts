import type { GraphQLResolveInfo } from "graphql";
import { CreateManyEventArgs } from "./args/CreateManyEventArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyEventResolver {
  createManyEvent(
    ctx: any,
    info: GraphQLResolveInfo,
    args: CreateManyEventArgs
  ): Promise<AffectedRowsOutput>;
}
