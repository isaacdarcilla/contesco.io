import { NextApiRequest } from "next";
import prisma from "../prismadb";

export async function getEvents(session: any) {
  return await prisma.event.findMany({
    where: {
      user: {
        email: session?.user?.email!,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function createEvent(req: NextApiRequest, session: any) {
  const {
    eventName,
    organizerName,
    categoryName,
    eventDescription,
    eventStartDate,
    eventEndDate,
  } = req.body;

  await prisma.event.create({
    data: {
      name: eventName,
      organizer: organizerName,
      user: { connect: { email: session?.user?.email! } },
      category: categoryName,
      description: eventDescription,
      eventStarts: new Date(eventStartDate).toISOString(),
      eventEnds: new Date(eventEndDate).toISOString(),
    },
  });
}

export async function getEventById(req: NextApiRequest, session: any) {
  const { id } = req.query;
  return await prisma.event.findFirst({
    where: {
      id: id ? { equals: id as string } : undefined,
      user: {
        email: session?.user?.email!,
      },
    },
  });
}
