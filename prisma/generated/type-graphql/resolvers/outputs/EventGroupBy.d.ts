import { EventCountAggregate } from "../outputs/EventCountAggregate";
import { EventMaxAggregate } from "../outputs/EventMaxAggregate";
import { EventMinAggregate } from "../outputs/EventMinAggregate";
export declare class EventGroupBy {
  id: string;
  userId: string;
  name: string;
  description: string;
  organizer: string;
  type: string | null;
  category: string;
  tags: string | null;
  banner: string | null;
  slug: string | null;
  eventStarts: Date | null;
  eventEnds: Date | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  _count: EventCountAggregate | null;
  _min: EventMinAggregate | null;
  _max: EventMaxAggregate | null;
}
