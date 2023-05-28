import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class SessionUpdateManyMutationInput {
  id?: StringFieldUpdateOperationsInput | undefined;
  sessionToken?: StringFieldUpdateOperationsInput | undefined;
  expires?: DateTimeFieldUpdateOperationsInput | undefined;
}
