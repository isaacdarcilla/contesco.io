export declare class UserMinAggregate {
  id: string | null;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
  role: "ADMIN" | "ORGANIZER" | "JUDGE" | "CONTESTANT" | "AUDIENCE" | null;
  createdAt: Date | null;
  updatedAt: Date | null;
}
