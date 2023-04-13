import prisma from "../../../lib/prismadb";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    eventName,
    organizerName,
    categoryName,
    eventDescription,
    eventStartDate,
    eventEndDate,
  } = req.body;

  const session = await getServerSession(req, res, authOptions);

  if (session) {
    const result = await prisma.event.create({
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
    return res.json(result);
  }

  return res.status(401).json({ message: "Unauthorized" });
}
