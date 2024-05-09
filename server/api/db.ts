import { PrismaClient } from '@prisma/client';

export default defineEventHandler(async (event) => {
  const dbRes = await main();
  return {
    dbRes: dbRes[0].title,
  };
});

const prisma = new PrismaClient();
     
async function main() {
  const allUsers = await prisma.test.findMany();
  return allUsers;
}
