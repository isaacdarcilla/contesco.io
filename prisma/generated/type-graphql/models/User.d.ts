import { Account } from "../models/Account";
import { Contestant } from "../models/Contestant";
import { Event } from "../models/Event";
import { Session } from "../models/Session";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
  id: string;
  name?: string | null;
  email: string;
  emailVerified?: Date | null;
  image?: string | null;
  role: "ADMIN" | "ORGANIZER" | "JUDGE" | "CONTESTANT" | "AUDIENCE";
  createdAt?: Date | null;
  updatedAt?: Date | null;
  accounts?: Account[];
  sessions?: Session[];
  events?: Event[];
  Contestant?: Contestant[];
  _count?: UserCount | null;
}
