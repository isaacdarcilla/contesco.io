import { NextApiRequest } from "next";
import prisma from "../prismadb";

async function getEvents() {
  return await prisma.event.findMany();
}

async function createEvent(req: NextApiRequest, session: any) {
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

export default { getEvents, createEvent };
