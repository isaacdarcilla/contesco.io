import type { GraphQLResolveInfo } from "graphql";
import { CreateManyVerificationTokenArgs } from "./args/CreateManyVerificationTokenArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyVerificationTokenResolver {
  createManyVerificationToken(
    ctx: any,
    info: GraphQLResolveInfo,
    args: CreateManyVerificationTokenArgs
  ): Promise<AffectedRowsOutput>;
}
