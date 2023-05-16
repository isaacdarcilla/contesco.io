import { NextApiRequest } from "next";
import prisma from "../prismadb";

export async function getEvents(req: NextApiRequest, session: any) {
  const column = req.query.column as string;
  const direction = req.query.direction as string;

  return await prisma.event.findMany({
    where: {
      user: {
        email: session?.user?.email!,
      },
    },
    orderBy: {
      [column]: direction,
    },
  });
}

export async function createEvent(req: NextApiRequest, session: any) {
  const { eventName, organizerName, categoryName, eventDescription } = req.body;

  await prisma.event.create({
    data: {
      name: eventName,
      organizer: organizerName,
      user: { connect: { email: session?.user?.email! } },
      category: categoryName,
      description: eventDescription,
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
