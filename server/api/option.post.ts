import prisma from "~/utils/prisma";

export default defineEventHandler(async (event) => {
  const { title, id } = await readBody(event);

  await prisma.option.create({
    data: {
      title: title,
      pollId: id,
    },
  });

  const res = prisma.option.findMany();

  return res;
});
