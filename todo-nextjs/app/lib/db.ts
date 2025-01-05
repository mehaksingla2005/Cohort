import { PrismaClient } from "@prisma/client";

//@ts-ignore
const prisma=globalThis.prisma??sa
if(process.env.NODE_ENV!='production')globalThis.prisma=prisma
export default prisma