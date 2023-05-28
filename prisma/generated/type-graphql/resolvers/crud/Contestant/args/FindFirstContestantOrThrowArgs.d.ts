import { ContestantOrderByWithRelationInput } from "../../../inputs/ContestantOrderByWithRelationInput";
import { ContestantWhereInput } from "../../../inputs/ContestantWhereInput";
import { ContestantWhereUniqueInput } from "../../../inputs/ContestantWhereUniqueInput";
export declare class FindFirstContestantOrThrowArgs {
  where?: ContestantWhereInput | undefined;
  orderBy?: ContestantOrderByWithRelationInput[] | undefined;
  cursor?: ContestantWhereUniqueInput | undefined;
  take?: number | undefined;
  skip?: number | undefined;
  distinct?:
    | Array<
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
      >
    | undefined;
}
