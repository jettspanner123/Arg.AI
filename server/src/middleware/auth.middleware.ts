import { jwt } from "hono/jwt";
import EnvValidator from "../utils/evn.js";
import { COOKIE_HEADER_NAME } from "../constants/jwt.js";

const AUTH_MIDDLEWARE = jwt({
    secret: EnvValidator.getValueOf("JWT_SECRET"),
    cookie: COOKIE_HEADER_NAME,
    headerName: "authorization",
});

export default AUTH_MIDDLEWARE;
