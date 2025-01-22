import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
    return new PrismaClient();
};

type GlobalWithPrisma = typeof globalThis & {
    prisma: ReturnType<typeof prismaClientSingleton> | undefined;
};

const globalForPrisma = globalThis as GlobalWithPrisma;

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();
globalForPrisma.prisma = prisma;

export default prisma;
