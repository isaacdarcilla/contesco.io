import { EnumUserRoleFieldUpdateOperationsInput } from "../inputs/EnumUserRoleFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateManyMutationInput {
  id?: StringFieldUpdateOperationsInput | undefined;
  name?: NullableStringFieldUpdateOperationsInput | undefined;
  email?: StringFieldUpdateOperationsInput | undefined;
  emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;
  image?: NullableStringFieldUpdateOperationsInput | undefined;
  role?: EnumUserRoleFieldUpdateOperationsInput | undefined;
  createdAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
  updatedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
}
