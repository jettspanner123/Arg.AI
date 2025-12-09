import { Hono } from "hono";
import UserController from "./user.controler.js";

const userRouter = new Hono();

userRouter.get("/", UserController.getAllUsers);

export default userRouter;
