import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const dbRes = await prisma.poll.findMany();
  return {
    dbRes: dbRes,
  };
});

