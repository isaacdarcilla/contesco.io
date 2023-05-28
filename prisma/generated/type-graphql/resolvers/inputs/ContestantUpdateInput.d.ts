import { EventUpdateOneRequiredWithoutContestantsNestedInput } from "../inputs/EventUpdateOneRequiredWithoutContestantsNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutContestantNestedInput } from "../inputs/UserUpdateOneRequiredWithoutContestantNestedInput";
export declare class ContestantUpdateInput {
  id?: StringFieldUpdateOperationsInput | undefined;
  firstName?: StringFieldUpdateOperationsInput | undefined;
  middleName?: NullableStringFieldUpdateOperationsInput | undefined;
  lastName?: StringFieldUpdateOperationsInput | undefined;
  gender?: StringFieldUpdateOperationsInput | undefined;
  age?: IntFieldUpdateOperationsInput | undefined;
  nationality?: NullableStringFieldUpdateOperationsInput | undefined;
  birthDate?: NullableStringFieldUpdateOperationsInput | undefined;
  phoneNumber?: StringFieldUpdateOperationsInput | undefined;
  email?: StringFieldUpdateOperationsInput | undefined;
  photo?: NullableStringFieldUpdateOperationsInput | undefined;
  createdAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
  updatedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
  event?: EventUpdateOneRequiredWithoutContestantsNestedInput | undefined;
  user?: UserUpdateOneRequiredWithoutContestantNestedInput | undefined;
}
