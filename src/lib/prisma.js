import { PrismaClient } from '@prisma/client'

let globalForPrisma = global

function maskMongoUrl(url) {
  if (!url) return 'undefined'
  try {
    const u = new URL(url)
    if (u.password) {
      u.password = '***'
    }
    return u.toString()
  } catch (_) {
    return '[redacted]'
  }
}

if (!globalForPrisma.__prisma_init_logged) {
  console.log('[Prisma] NODE_ENV =', process.env.NODE_ENV)
  console.log('[Prisma] DATABASE_URL =', maskMongoUrl(process.env.DATABASE_URL))
  globalForPrisma.__prisma_init_logged = true
}

const prismaLogConfig = process.env.NODE_ENV === 'production'
  ? ['error']
  : ['query', 'info', 'warn', 'error']

export const prisma = globalForPrisma.prisma || new PrismaClient({
  log: prismaLogConfig,
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma


