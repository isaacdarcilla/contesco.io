import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { createEvent } from "@/lib/services/event.service";
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    const result = await createEvent(req, session);
    return res.json(result);
  }

  return res.status(401).json({ message: "Unauthorized" });
}
