export declare class AccountCreateManyInput {
  id?: string | undefined;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string | undefined;
  access_token?: string | undefined;
  expires_at?: number | undefined;
  token_type?: string | undefined;
  scope?: string | undefined;
  id_token?: string | undefined;
  session_state?: string | undefined;
}
