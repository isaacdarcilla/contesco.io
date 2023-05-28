export declare class NestedEnumUserRoleFilter {
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
  not?: NestedEnumUserRoleFilter | undefined;
}
