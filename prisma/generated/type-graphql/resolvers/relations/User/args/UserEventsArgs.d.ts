import { EventOrderByWithRelationInput } from "../../../inputs/EventOrderByWithRelationInput";
import { EventWhereInput } from "../../../inputs/EventWhereInput";
import { EventWhereUniqueInput } from "../../../inputs/EventWhereUniqueInput";
export declare class UserEventsArgs {
  where?: EventWhereInput | undefined;
  orderBy?: EventOrderByWithRelationInput[] | undefined;
  cursor?: EventWhereUniqueInput | undefined;
  take?: number | undefined;
  skip?: number | undefined;
  distinct?:
    | Array<
        | "id"
        | "userId"
        | "name"
        | "description"
        | "organizer"
        | "type"
        | "category"
        | "tags"
        | "banner"
        | "slug"
        | "eventStarts"
        | "eventEnds"
        | "createdAt"
        | "updatedAt"
      >
    | undefined;
}
