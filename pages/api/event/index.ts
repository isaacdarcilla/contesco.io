import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prismadb";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const result = await prisma.event.create({
      data: {
        ...req.body,
      },
    });
    return res.json(result);
  }
}
