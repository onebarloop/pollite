import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async () => {
  const dbRes = await prisma.poll.findMany({
    include: {
      options: true
    }
  });
  return {
    dbRes: dbRes,
  };
});

