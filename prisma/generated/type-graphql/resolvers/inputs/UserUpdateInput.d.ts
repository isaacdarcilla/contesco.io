import { AccountUpdateManyWithoutUserNestedInput } from "../inputs/AccountUpdateManyWithoutUserNestedInput";
import { ContestantUpdateManyWithoutUserNestedInput } from "../inputs/ContestantUpdateManyWithoutUserNestedInput";
import { EnumUserRoleFieldUpdateOperationsInput } from "../inputs/EnumUserRoleFieldUpdateOperationsInput";
import { EventUpdateManyWithoutUserNestedInput } from "../inputs/EventUpdateManyWithoutUserNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SessionUpdateManyWithoutUserNestedInput } from "../inputs/SessionUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateInput {
  id?: StringFieldUpdateOperationsInput | undefined;
  name?: NullableStringFieldUpdateOperationsInput | undefined;
  email?: StringFieldUpdateOperationsInput | undefined;
  emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;
  image?: NullableStringFieldUpdateOperationsInput | undefined;
  role?: EnumUserRoleFieldUpdateOperationsInput | undefined;
  createdAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
  updatedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
  accounts?: AccountUpdateManyWithoutUserNestedInput | undefined;
  sessions?: SessionUpdateManyWithoutUserNestedInput | undefined;
  events?: EventUpdateManyWithoutUserNestedInput | undefined;
  Contestant?: ContestantUpdateManyWithoutUserNestedInput | undefined;
}
