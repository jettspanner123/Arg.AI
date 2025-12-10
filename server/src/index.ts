import { Hono } from "hono";
import authRouter from "./modules/auth/auth.route.js";
import userRouter from "./modules/user/user.route.js";
import AUTH_MIDDLEWARE from "./middleware/auth.middleware.js";
import LOGGER from "./middleware/logger.middleware.js";
import { cors } from "hono/cors";
import aiRouter from "./modules/ai/ai.route.js";

const app = new Hono();

// Middleware
app.use("*", LOGGER);
app.use("/user", AUTH_MIDDLEWARE);
app.use(cors());

app.route("/auth", authRouter);
app.route("/user", userRouter);
app.route("/ai", aiRouter);

export default app;
