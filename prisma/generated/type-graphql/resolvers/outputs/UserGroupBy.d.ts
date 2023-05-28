import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
export declare class UserGroupBy {
  id: string;
  name: string | null;
  email: string;
  emailVerified: Date | null;
  image: string | null;
  role: "ADMIN" | "ORGANIZER" | "JUDGE" | "CONTESTANT" | "AUDIENCE";
  createdAt: Date | null;
  updatedAt: Date | null;
  _count: UserCountAggregate | null;
  _min: UserMinAggregate | null;
  _max: UserMaxAggregate | null;
}
