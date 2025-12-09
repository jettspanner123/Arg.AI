import bcrypt from "bcryptjs";

export const SALT_ROUND: number = 10;

export default class PasswordService {
    public static async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, SALT_ROUND);
    }

    public static async comparePassword(
        password: string,
        hashed: string,
    ): Promise<boolean> {
        return await bcrypt.compare(password, hashed);
    }
}
