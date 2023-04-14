import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import getEvents from "@/lib/services/event.service";
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    const result = await getEvents();
    return res.json(result);
  }

  return res.status(401).json({ message: "Unauthorized" });
}
