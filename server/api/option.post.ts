import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {

  const body = await readBody(event);

  await prisma.option.create({
    data: {
      title: body.title,
      pollId: body.id
    },
  });
});
