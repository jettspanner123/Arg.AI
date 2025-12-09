import { sign } from "hono/jwt";
import EnvValidator from "./evn.js";

export default class JWTService {
    public static getPayload(userId: string) {
        const time = Math.floor(Date.now() / 1000);
        return {
            sub: userId,
            iat: time,
            exp: time + 1 * 60 * 60,
        };
    }
    public static async generateToken(userId: string): Promise<string> {
        const secret = EnvValidator.getValueOf("JWT_SECRET");
        const payload = JWTService.getPayload(userId);
        return await sign(payload, secret);
    }
}
