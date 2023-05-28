export declare class UserCreateManyInput {
  id?: string | undefined;
  name?: string | undefined;
  email: string;
  emailVerified?: Date | undefined;
  image?: string | undefined;
  role?:
    | "ADMIN"
    | "ORGANIZER"
    | "JUDGE"
    | "CONTESTANT"
    | "AUDIENCE"
    | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
}
