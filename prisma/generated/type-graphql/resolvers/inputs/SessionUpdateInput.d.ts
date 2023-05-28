import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutSessionsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutSessionsNestedInput";
export declare class SessionUpdateInput {
  id?: StringFieldUpdateOperationsInput | undefined;
  sessionToken?: StringFieldUpdateOperationsInput | undefined;
  expires?: DateTimeFieldUpdateOperationsInput | undefined;
  user?: UserUpdateOneRequiredWithoutSessionsNestedInput | undefined;
}
