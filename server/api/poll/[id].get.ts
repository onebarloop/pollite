import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (e) => {
  const id = getRouterParam(e, 'id');
  console.log(id);

  const dbRes = await prisma.poll.findUnique({
    where: {
      id: id,
    },
    include: {
      options: true,
    },
  });
  return {
    dbRes: dbRes,
  };
});
