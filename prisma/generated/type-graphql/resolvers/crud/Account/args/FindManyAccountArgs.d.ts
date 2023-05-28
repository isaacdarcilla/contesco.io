import { AccountOrderByWithRelationInput } from "../../../inputs/AccountOrderByWithRelationInput";
import { AccountWhereInput } from "../../../inputs/AccountWhereInput";
import { AccountWhereUniqueInput } from "../../../inputs/AccountWhereUniqueInput";
export declare class FindManyAccountArgs {
  where?: AccountWhereInput | undefined;
  orderBy?: AccountOrderByWithRelationInput[] | undefined;
  cursor?: AccountWhereUniqueInput | undefined;
  take?: number | undefined;
  skip?: number | undefined;
  distinct?:
    | Array<
        | "id"
        | "userId"
        | "type"
        | "provider"
        | "providerAccountId"
        | "refresh_token"
        | "access_token"
        | "expires_at"
        | "token_type"
        | "scope"
        | "id_token"
        | "session_state"
      >
    | undefined;
}
