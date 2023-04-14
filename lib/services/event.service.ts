import prisma from "../prismadb";

export default async function getEvents() {
  return await prisma.event.findMany();
}
