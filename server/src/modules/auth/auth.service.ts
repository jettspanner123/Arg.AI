import { deleteCookie, setCookie } from "hono/cookie";
import {
    LOGIN_DTO,
    LOGIN_SERVICE_RESPONSE,
    REGISTER_DTO,
    REGISTER_SERVICE_RESPONSE,
} from "../../../../shared/types/auth.types.js";
import Database from "../../db/client.js";
import JWTService from "../../utils/jwt.js";
import PasswordService from "../../utils/passwrod.js";
import { SAFE_BASE_USER } from "../../../../shared/types/user.types.js";

const db = Database.getInstance();

export default class AuthService {
    async checkHealth() {
        await db.user.findMany({});
    }

    // Register User
    async register(
        userDetails: REGISTER_DTO,
    ): Promise<REGISTER_SERVICE_RESPONSE> {
        const { username, email, firstName, lastName, password } = userDetails;
        if (await AuthServiceHelper.checkIfUsernameExists(username)) {
            throw new Error("Username Already Exists!");
        }
        if (await AuthServiceHelper.checkIfEmailExists(email)) {
            throw new Error("Email Id Already Exists!");
        }

        // Creating Hash Password
        const hashedPassword = await PasswordService.hashPassword(password);

        // Create User
        const user = await db.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                firstName,
                lastName,
            },
        });

        // Generate Token Based on the id
        const token = await JWTService.generateToken(user.id);

        return { token, user };
    }

    async login(userDetails: LOGIN_DTO): Promise<LOGIN_SERVICE_RESPONSE> {
        const { username, password } = userDetails;
        const user = await db.user.findUnique({ where: { username } });
        if (!user) throw new Error("Username not found!");

        const isPasswordRight = await PasswordService.comparePassword(
            password,
            user.password,
        );

        if (!isPasswordRight)
            throw new Error(`Wrong Password for the username ${username}`);

        // Generate Token
        const token = await JWTService.generateToken(user.id);

        return {
            token,
            user,
        };
    }
}

class AuthServiceHelper {
    public static async checkIfEmailExists(email: string): Promise<boolean> {
        const user = await db.user.findUnique({ where: { email } });
        if (user) return true;
        else return false;
    }
    public static async checkIfUsernameExists(
        username: string,
    ): Promise<boolean> {
        const user = await db.user.findUnique({ where: { username } });
        if (user) return true;
        else return false;
    }
}
