import { ContestantOrderByWithAggregationInput } from "../../../inputs/ContestantOrderByWithAggregationInput";
import { ContestantScalarWhereWithAggregatesInput } from "../../../inputs/ContestantScalarWhereWithAggregatesInput";
import { ContestantWhereInput } from "../../../inputs/ContestantWhereInput";
export declare class GroupByContestantArgs {
  where?: ContestantWhereInput | undefined;
  orderBy?: ContestantOrderByWithAggregationInput[] | undefined;
  by: Array<
    | "id"
    | "eventId"
    | "userId"
    | "firstName"
    | "middleName"
    | "lastName"
    | "gender"
    | "age"
    | "nationality"
    | "birthDate"
    | "phoneNumber"
    | "email"
    | "photo"
    | "createdAt"
    | "updatedAt"
  >;
  having?: ContestantScalarWhereWithAggregatesInput | undefined;
  take?: number | undefined;
  skip?: number | undefined;
}
