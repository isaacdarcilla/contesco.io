import type { TContext } from "@/pages/api/graphql";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { CreateContestantInput } from "./contestantTypes";

@Resolver()
export class ContestantResolver {
  @Mutation(() => String)
  async createContestant(
    @Arg("input", () => CreateContestantInput)
    {
      photo,
      firstName,
      middleName,
      lastName,
      gender,
      nationality,
      phoneNumber,
      email,
      age,
      eventId,
    }: CreateContestantInput,
    @Ctx() { prisma, user }: TContext
  ): Promise<String> {
    try {
      const result = await prisma.contestant.create({
        data: {
          user: { connect: { email: user?.email! } },
          event: { connect: { id: eventId } },
          photo: photo,
          firstName: firstName,
          middleName: middleName,
          lastName: lastName,
          gender: gender,
          nationality: nationality,
          phoneNumber: phoneNumber,
          email: email,
          age: age,
        },
      });

      return result.firstName;
    } catch (err: any) {
      console.error(err);
      throw new Error(err.message);
    }
  }
}
