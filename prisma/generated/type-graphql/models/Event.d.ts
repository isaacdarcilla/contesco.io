import { Contestant } from "../models/Contestant";
import { User } from "../models/User";
import { EventCount } from "../resolvers/outputs/EventCount";
export declare class Event {
  id: string;
  userId: string;
  name: string;
  description: string;
  organizer: string;
  type?: string | null;
  category: string;
  tags?: string | null;
  banner?: string | null;
  slug?: string | null;
  eventStarts?: Date | null;
  eventEnds?: Date | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  contestants?: Contestant[];
  user?: User;
  _count?: EventCount | null;
}
