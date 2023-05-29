import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import type { TContext } from "../../../pages/api/graphql";
import { CreateEventInput, Event } from "./eventTypes";
import { createEvent } from "@/src/services/eventsService";

@Resolver()
export class EventResolver {
  @Query(() => [Event], { nullable: true })
  async getEvents(
    @Arg("column", () => String, { nullable: true }) column: string,
    @Arg("direction", () => String, { nullable: true }) direction: string,
    @Ctx() { prisma, user }: TContext
  ): Promise<Event[]> {
    try {
      return await prisma.event.findMany({
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
  async createEvent(
    @Arg("input", () => CreateEventInput)
    { name, organizer, category, description }: CreateEventInput,
    @Ctx() { prisma, user }: TContext
  ): Promise<Event> {
    try {
      return await prisma.event.create({
        data: {
          name: name,
          organizer: organizer,
          user: { connect: { email: user?.email! } },
          category: category,
          description: description,
        },
      });
    } catch (err: any) {
      console.error(err);
      throw new Error(err.message);
    }
  }
}
