// src/lib/prisma.js
import { PrismaClient } from "@prisma/client";

let globalForPrisma = globalThis;

const prismaLogConfig =
  process.env.NODE_ENV === "production"
    ? ["error"]
    : ["query", "info", "warn", "error"];

// Use a global variable to prevent multiple instances in development
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: prismaLogConfig,
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
