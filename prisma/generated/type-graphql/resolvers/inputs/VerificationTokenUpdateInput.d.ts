import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class VerificationTokenUpdateInput {
  identifier?: StringFieldUpdateOperationsInput | undefined;
  token?: StringFieldUpdateOperationsInput | undefined;
  expires?: DateTimeFieldUpdateOperationsInput | undefined;
}
