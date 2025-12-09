import { CookieOptions } from "hono/utils/cookie";
import EnvValidator from "../utils/evn.js";

export const COOKIE_HEADER_NAME: string = "auth_cookie";

export const COOKIE_OPTIONS: CookieOptions = {
    httpOnly: true,
    secure: EnvValidator.getValueOf("NODE_ENV") === "production",
    sameSite: "Lax",
    path: "/",
    maxAge: 60 * 60,
};
