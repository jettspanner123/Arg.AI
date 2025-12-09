import {
    BASE_USER,
    GET_ALL_USERS,
    SAFE_BASE_USER,
} from "../../../../shared/types/user.types.js";
import Database from "../../db/client.js";

const db = Database.getInstance();

export default class UserService {
    async getAllUsers(): Promise<Array<SAFE_BASE_USER>> {
        const users = await db.user.findMany({
            omit: {
                password: true,
            },
        });
        return users;
    }
}
