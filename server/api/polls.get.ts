import prisma from '~/utils/prisma';

export default defineEventHandler(async () => {
  const dbRes = await prisma.poll.findMany({
    include: {
      options: true,
    },
  });
  return {
    dbRes,
  };
});
