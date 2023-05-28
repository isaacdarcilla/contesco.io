import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutAccountsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutAccountsNestedInput";
export declare class AccountUpdateInput {
  id?: StringFieldUpdateOperationsInput | undefined;
  type?: StringFieldUpdateOperationsInput | undefined;
  provider?: StringFieldUpdateOperationsInput | undefined;
  providerAccountId?: StringFieldUpdateOperationsInput | undefined;
  refresh_token?: NullableStringFieldUpdateOperationsInput | undefined;
  access_token?: NullableStringFieldUpdateOperationsInput | undefined;
  expires_at?: NullableIntFieldUpdateOperationsInput | undefined;
  token_type?: NullableStringFieldUpdateOperationsInput | undefined;
  scope?: NullableStringFieldUpdateOperationsInput | undefined;
  id_token?: NullableStringFieldUpdateOperationsInput | undefined;
  session_state?: NullableStringFieldUpdateOperationsInput | undefined;
  user?: UserUpdateOneRequiredWithoutAccountsNestedInput | undefined;
}
