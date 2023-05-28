import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { getSession } from "next-auth/react";
import { buildSchema } from "type-graphql";
import Cors from "micro-cors";
import { PrismaClient } from "@prisma/client";
import rateLimit from "@/src/utils/rateLimiter";
import { resolvers } from "@/prisma/generated/type-graphql";
import { EventResolver } from "@/src/resolvers/users/eventResolver";

const cors = Cors({
  origin:
    process.env.NODE_ENV === "production" ? process.env.NEXTAUTH_URL : "*",
});

const prisma = new PrismaClient();

export interface TContext {
  prisma: typeof prisma;
  user?: {
    name?: string;
    email: string;
  };
}

export interface TContext {
  prisma: typeof prisma;
  id?: string;
}

const limiter = rateLimit({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 500,
});

const schema = await buildSchema({
  resolvers: [EventResolver],
});

const server = new ApolloServer({
  schema,
  cache: "bounded",
  context: async ({ req }) => {
    const session = await getSession({ req });
    const user = session?.user;
    return { prisma, user };
  },
  csrfPrevention: true,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

export default cors(async (req, res) => {
  res.setHeader("Cache-Control", ["max-age=0", "s-maxage=86400"]);

  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  try {
    await limiter.check(res, 20, "CACHE_TOKEN_GQL");
  } catch {
    res.writeHead(429);
  }

  await startServer;
  return server.createHandler({ path: "/api/graphql" })(req, res);
});
