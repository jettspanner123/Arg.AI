export default class EnvValidator {
    static getValueOf(key: string){
        const value = process.env[key];
        if (!value) throw new Error(`Missing Env For: ${key}`);
        return value;
    }
}
