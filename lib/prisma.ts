import { Prisma, PrismaClient } from "@prisma/client";

const prismaClientForSignleton = () => {
  return new PrismaClient();
};
type prismaClientForSignleton = ReturnType<typeof prismaClientForSignleton>;
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? prismaClientForSignleton();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
