import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import type { TContext } from "@/pages/api/graphql";
import { Contestant, CreateContestantInput } from "./contestantTypes";

@Resolver()
export class ContestantResolver {
  @Query(() => [Contestant], { nullable: true })
  async getContestants(
    @Arg("column", () => String, { nullable: true }) column: string,
    @Arg("direction", () => String, { nullable: true }) direction: string,
    @Ctx() { prisma, user }: TContext
  ): Promise<Contestant[] | null> {
    try {
      return await prisma.contestant.findMany({
        where: {
          user: {
            email: user?.email!,
          },
        },
        orderBy: {
          [column]: direction,
        },
      });
    } catch (err: any) {
      console.error(err);
      throw new Error(err.message);
    }
  }

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
