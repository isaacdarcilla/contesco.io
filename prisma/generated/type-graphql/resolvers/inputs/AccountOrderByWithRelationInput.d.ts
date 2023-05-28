import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class AccountOrderByWithRelationInput {
  id?: "asc" | "desc" | undefined;
  userId?: "asc" | "desc" | undefined;
  type?: "asc" | "desc" | undefined;
  provider?: "asc" | "desc" | undefined;
  providerAccountId?: "asc" | "desc" | undefined;
  refresh_token?: "asc" | "desc" | undefined;
  access_token?: "asc" | "desc" | undefined;
  expires_at?: "asc" | "desc" | undefined;
  token_type?: "asc" | "desc" | undefined;
  scope?: "asc" | "desc" | undefined;
  id_token?: "asc" | "desc" | undefined;
  session_state?: "asc" | "desc" | undefined;
  user?: UserOrderByWithRelationInput | undefined;
}
