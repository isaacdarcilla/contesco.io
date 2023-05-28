import type { GraphQLResolveInfo } from "graphql";
import { CreateOneVerificationTokenArgs } from "./args/CreateOneVerificationTokenArgs";
import { VerificationToken } from "../../../models/VerificationToken";
export declare class CreateOneVerificationTokenResolver {
  createOneVerificationToken(
    ctx: any,
    info: GraphQLResolveInfo,
    args: CreateOneVerificationTokenArgs
  ): Promise<VerificationToken>;
}
