import EnvValidator from "../utils/evn.js";
import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

export default class Database {
    public static prisma: PrismaClient | undefined;

    public static getInstance(): PrismaClient {
        if (Database.prisma == null) {
            Database.prisma = new PrismaClient({
                adapter: new PrismaPg({
                    connectionString: EnvValidator.getValueOf("DATABASE_URL"),
                }),
            });
        }
        return Database.prisma;
    }
}
