import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class SessionUpdateWithoutUserInput {
  id?: StringFieldUpdateOperationsInput | undefined;
  sessionToken?: StringFieldUpdateOperationsInput | undefined;
  expires?: DateTimeFieldUpdateOperationsInput | undefined;
}
