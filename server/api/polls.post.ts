import prisma from '~/utils/prisma';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  await prisma.poll.create({
    data: {
      title: body.data,
    },
  });

  const dbRes = await prisma.poll.findMany({
    include: {
      options: true,
    },
  });
  return {
    dbRes,
  };
});
