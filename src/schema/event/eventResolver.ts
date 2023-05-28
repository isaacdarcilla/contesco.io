import { Ctx, Query, Resolver } from "type-graphql";
import type { TContext } from "../../../pages/api/graphql";
import { Event } from "./eventTypes";

@Resolver()
export class EventResolver {
  @Query(() => [Event], { nullable: true })
  async getEvents(@Ctx() { prisma, user }: TContext): Promise<Event[]> {
    try {
      return await prisma.event.findMany({
        where: {
          user: {
            email: user?.email!,
          },
        },
      });
    } catch (err: any) {
      console.error(err);
      throw new Error(err.message);
    }
  }
}
