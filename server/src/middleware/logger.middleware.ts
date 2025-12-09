import { Context, Next } from "hono";

export default async function LOGGER(context: Context, next: Next) {
    await next();
    console.log(
        `${context.req.method.toUpperCase()} ${context.req.url} -> ${context.res.status}`,
    );
}
