import { Hono } from "hono";
import authRouter from "./modules/auth/auth.route.js";
import userRouter from "./modules/user/user.route.js";
import AUTH_MIDDLEWARE from "./middleware/auth.middleware.js";
import LOGGER from "./middleware/logger.middleware.js";

const app = new Hono();

// Middleware
app.use("*", LOGGER);
app.use("/user", AUTH_MIDDLEWARE);

app.route("/auth", authRouter);
app.route("/user", userRouter);

export default app;
