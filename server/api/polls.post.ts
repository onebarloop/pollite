import prisma from "~/utils/prisma";

export default defineEventHandler(async (event) => {

  const body = await readBody(event);

  const newPoll = await prisma.poll.create({
    data: {
      title: body.data,
    },
  });
});
