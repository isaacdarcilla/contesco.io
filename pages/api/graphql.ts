import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { getSession } from "next-auth/react";
import {
  buildSchema,
  Field,
  ID,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import Cors from "micro-cors";
import { PrismaClient } from "@prisma/client";
import rateLimit from "@/lib/global/rateLimiter";

const cors = Cors({
  origin:
    process.env.NODE_ENV === "production" ? process.env.NEXTAUTH_URL : "*",
});

const prisma = new PrismaClient();

export interface TContext {
  prisma: typeof prisma;
  id?: string;
}

const limiter = rateLimit({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 500,
});

@ObjectType()
export class Dog {
  @Field(() => ID)
  name!: string;
}

@Resolver(Dog)
export class DogsResolver {
  @Query(() => [Dog])
  dogs(): Dog[] {
    return [{ name: "Bob" }];
  }
}

const schema = await buildSchema({
  resolvers: [DogsResolver],
});

const server = new ApolloServer({
  schema,
  cache: "bounded",
  context: async ({ req }) => {
    const session = await getSession({ req });
    const email = session?.user?.email;
    return { prisma, email };
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
