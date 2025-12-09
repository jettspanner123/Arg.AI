import { Context } from "hono";
import type {
    HEALTH_CHECK_RESPONSE,
    LOGIN_DTO,
    LOGIN_USER_RESPONSE,
    REGISTER_DTO,
    REGISTER_USER_RESPONSE,
} from "../../../../shared/types/auth.types.js";
import type { EVENT_RESPONSE } from "../../../../shared/types/base.types.js";
import Database from "../../db/client.js";
import { StatusCodes } from "http-status-codes";
import AuthService from "./auth.service.js";
import { deleteCookie, setCookie } from "hono/cookie";
import { COOKIE_HEADER_NAME, COOKIE_OPTIONS } from "../../constants/jwt.js";

const db = Database.getInstance();
const authService = new AuthService();

export default class AuthController {
    // /health-check, Checks The Auth Service Health
    public static async healthCheck(context: Context) {
        try {
            await authService.checkHealth();
            return context.json(
                {
                    success: true,
                    message: "Auth Services Working Fine!",
                } satisfies HEALTH_CHECK_RESPONSE,
                StatusCodes.OK,
            );
        } catch {
            return context.json(
                {
                    success: false,
                    message: "Auth Services Down!",
                } satisfies HEALTH_CHECK_RESPONSE,
                StatusCodes.INTERNAL_SERVER_ERROR,
            );
        }
    }

    // "/register", Registers The user
    public static async register(context: Context) {
        // Validated User Data
        const { username, email, password, firstName, lastName }: REGISTER_DTO =
            // @ts-ignore
            context.req.valid("json");

        // Create User and Get JWT Token
        try {
            const data = await authService.register({
                username,
                email,
                password,
                firstName,
                lastName,
            });

            setCookie(context, COOKIE_HEADER_NAME, data.token, COOKIE_OPTIONS);

            return context.json(
                {
                    success: true,
                    message: "User Created Successfully!",
                    user: data.user,
                    errors: null,
                } satisfies REGISTER_USER_RESPONSE,
                StatusCodes.CREATED,
            );
        } catch (err: any) {
            return context.json(
                {
                    success: false,
                    message: "Failed Creating User!",
                    user: null,
                    errors: err instanceof Error ? err.message : err,
                } satisfies REGISTER_USER_RESPONSE,
                StatusCodes.CONFLICT,
            );
        }
    }

    // "/login", User Login
    public static async login(context: Context) {
        try {
            //@ts-ignore
            const { username, password }: LOGIN_DTO = context.req.valid("json");
            const data = await authService.login({ username, password });
            setCookie(context, COOKIE_HEADER_NAME, data.token, COOKIE_OPTIONS);
            return context.json(
                {
                    success: true,
                    message: "Login Successful!",
                    user: data.user,
                    errors: null,
                } satisfies LOGIN_USER_RESPONSE,
                StatusCodes.OK,
            );
        } catch (err: any) {
            return context.json(
                {
                    success: false,
                    message: "Login Failed!",
                    user: null,
                    errors: err instanceof Error ? err.message : err,
                } satisfies LOGIN_USER_RESPONSE,
                StatusCodes.UNAUTHORIZED,
            );
        }
    }

    // "/logout", User Logout
    public static async logout(context: Context) {
        try {
            deleteCookie(context, COOKIE_HEADER_NAME, COOKIE_OPTIONS);

            return context.json(
                {
                    success: true,
                    message: "User Logout Successful!",
                    errors: null,
                } satisfies EVENT_RESPONSE,
                StatusCodes.OK,
            );
        } catch (err: any) {
            return context.json(
                {
                    success: false,
                    errors: err instanceof Error ? err.message : err,
                    message: "Someting Went Wrong!",
                } satisfies EVENT_RESPONSE,
                StatusCodes.NOT_FOUND,
            );
        }
    }
}
