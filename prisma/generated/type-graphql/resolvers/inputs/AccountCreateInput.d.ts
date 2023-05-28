import { UserCreateNestedOneWithoutAccountsInput } from "../inputs/UserCreateNestedOneWithoutAccountsInput";
export declare class AccountCreateInput {
  id?: string | undefined;
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
  user: UserCreateNestedOneWithoutAccountsInput;
}
