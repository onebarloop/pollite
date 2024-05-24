import prisma from "~/utils/prisma";

export default defineEventHandler(async (e) => {
    const { title, id } = await readBody(e);

    await prisma.option.create({
      data: {
        title: title,
        pollId: id,
      },
    });

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
