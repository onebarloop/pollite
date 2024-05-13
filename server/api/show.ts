import { PrismaClient } from '@prisma/client';

export default defineEventHandler(async (event) => {
  const dbRes = await main();
  return {
    dbRes: dbRes,
  };
});

const prisma = new PrismaClient();
     
async function main() {
  const test = await prisma.poll.findMany();
  return test;
}
