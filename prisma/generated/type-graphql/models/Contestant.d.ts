import { Event } from "../models/Event";
import { User } from "../models/User";
export declare class Contestant {
  id: string;
  eventId: string;
  userId: string;
  firstName: string;
  middleName?: string | null;
  lastName: string;
  gender: string;
  age: number;
  nationality?: string | null;
  birthDate?: string | null;
  phoneNumber: string;
  email: string;
  photo?: string | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  event?: Event;
  user?: User;
}
