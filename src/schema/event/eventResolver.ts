import { Arg, Ctx, Query, Resolver } from "type-graphql";
import type { TContext } from "../../../pages/api/graphql";
import { Event } from "./eventTypes";

@Resolver()
export class EventResolver {
  @Query(() => [Event], { nullable: true })
  async getEvents(
    @Arg("column", () => String, { nullable: true }) column: string,
    @Arg("direction", () => String, { nullable: true }) direction: string,
    @Ctx() { prisma, user }: TContext
  ): Promise<Event[]> {
    return prisma.event.findMany({
      where: {
        user: {
          email: user?.email!,
        },
      },
      orderBy: {
        [column]: direction,
      },
    });
  }
}
