import { PrismaClient } from "@prisma/client"

//add prisma variable to my local window 
declare global {
    var prisma: PrismaClient | undefined
}

const prismadb = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb

export default prismadb;