import { User } from "../models/User";
export declare class Session {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Date;
  user?: User;
}
