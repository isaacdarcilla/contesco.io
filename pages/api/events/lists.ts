import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { getEvents } from "@/src/services/eventsService";
import rateLimit from "@/src/utils/rateLimiter";

const limiter = rateLimit({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 1000,
});

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    try {
      await limiter.check(res, 10, "EVENT_LIST");

      const result = await getEvents(req, session);
      return res.json(result);
    } catch {
      return res.status(429).json({ message: "Rate limit exceeded" });
    }
  }

  return res.status(401).json({ message: "Unauthorized" });
}
