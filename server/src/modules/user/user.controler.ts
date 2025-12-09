import { Context } from "hono";
import UserService from "./user.service.js";
import { StatusCodes } from "http-status-codes";
import { GET_ALL_USERS } from "../../../../shared/types/user.types.js";

const userService = new UserService();

export default class UserController {
    public static async getAllUsers(context: Context) {
        try {
            const users = await userService.getAllUsers();
            return context.json(
                {
                    success: true,
                    users,
                    errors: null,
                } satisfies GET_ALL_USERS,
                StatusCodes.OK,
            );
        } catch (err: any) {
            return context.json(
                {
                    success: false,
                    users: null,
                    errors: err instanceof Error ? err.message : err,
                } satisfies GET_ALL_USERS,
                StatusCodes.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
