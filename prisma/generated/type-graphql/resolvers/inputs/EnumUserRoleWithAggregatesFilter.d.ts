import { NestedEnumUserRoleFilter } from "../inputs/NestedEnumUserRoleFilter";
import { NestedEnumUserRoleWithAggregatesFilter } from "../inputs/NestedEnumUserRoleWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumUserRoleWithAggregatesFilter {
  equals?:
    | "ADMIN"
    | "ORGANIZER"
    | "JUDGE"
    | "CONTESTANT"
    | "AUDIENCE"
    | undefined;
  in?:
    | Array<"ADMIN" | "ORGANIZER" | "JUDGE" | "CONTESTANT" | "AUDIENCE">
    | undefined;
  notIn?:
    | Array<"ADMIN" | "ORGANIZER" | "JUDGE" | "CONTESTANT" | "AUDIENCE">
    | undefined;
  not?: NestedEnumUserRoleWithAggregatesFilter | undefined;
  _count?: NestedIntFilter | undefined;
  _min?: NestedEnumUserRoleFilter | undefined;
  _max?: NestedEnumUserRoleFilter | undefined;
}
