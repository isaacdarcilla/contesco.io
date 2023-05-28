import { ContestantUpdateManyWithoutEventNestedInput } from "../inputs/ContestantUpdateManyWithoutEventNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class EventUpdateWithoutUserInput {
  id?: StringFieldUpdateOperationsInput | undefined;
  name?: StringFieldUpdateOperationsInput | undefined;
  description?: StringFieldUpdateOperationsInput | undefined;
  organizer?: StringFieldUpdateOperationsInput | undefined;
  type?: NullableStringFieldUpdateOperationsInput | undefined;
  category?: StringFieldUpdateOperationsInput | undefined;
  tags?: NullableStringFieldUpdateOperationsInput | undefined;
  banner?: NullableStringFieldUpdateOperationsInput | undefined;
  slug?: NullableStringFieldUpdateOperationsInput | undefined;
  eventStarts?: NullableDateTimeFieldUpdateOperationsInput | undefined;
  eventEnds?: NullableDateTimeFieldUpdateOperationsInput | undefined;
  createdAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
  updatedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
  contestants?: ContestantUpdateManyWithoutEventNestedInput | undefined;
}
