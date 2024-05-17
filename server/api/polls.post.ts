import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {

  const body = await readBody(event);

  const newPoll = await prisma.poll.create({
    data: {
      title: body.data,
    },
  });
});
