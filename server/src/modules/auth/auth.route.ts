import { Hono, MiddlewareHandler } from "hono";
import AuthController from "./auth.controller.js";
import {
    LOGIN_VALIDATOR,
    REGISTER_VALIDATOR,
} from "../../../../shared/types/auth.types.js";
import AUTH_MIDDLEWARE from "../../middleware/auth.middleware.js";

const authRouter = new Hono();
authRouter.get("/health-check", AuthController.healthCheck);

// Register User
authRouter.post(
    "/register",
    REGISTER_VALIDATOR as unknown as MiddlewareHandler,
    AuthController.register,
);

// Login User
authRouter.post(
    "/login",
    LOGIN_VALIDATOR as unknown as MiddlewareHandler,
    AuthController.login
)

// Logout User
authRouter.post("/logout", AUTH_MIDDLEWARE, AuthController.logout);

export default authRouter;
