import { Prisma } from "../../server/src/db/generated/prisma/client";

export type BASE_USER = Prisma.UserGetPayload<{
    select: {
        id: true;
        username: true;
        password: true;
        email: true;
        deletedAt: true;
        deletionStatus: true;
        createdAt: true;
        updatedAt: true;
        firstName: true;
        lastName: true;
    };
}>;

export type SAFE_BASE_USER = Omit<BASE_USER, "password">;

export type GET_ALL_USERS = {
    success: boolean;
    users: Array<SAFE_BASE_USER> | null;
    errors: Array<string> | string | null;
};
