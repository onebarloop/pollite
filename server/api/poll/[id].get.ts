import prisma from '~/utils/prisma';

export default defineEventHandler(async (e) => {
  const id = getRouterParam(e, 'id');

  const dbRes = await prisma.poll.findUnique({
    where: {
      id: id,
    },
    include: {
      options: true,
    },
  });
  return {
    dbRes,
  };
});
