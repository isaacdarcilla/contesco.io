import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class SessionOrderByWithRelationInput {
  id?: "asc" | "desc" | undefined;
  sessionToken?: "asc" | "desc" | undefined;
  userId?: "asc" | "desc" | undefined;
  expires?: "asc" | "desc" | undefined;
  user?: UserOrderByWithRelationInput | undefined;
}
