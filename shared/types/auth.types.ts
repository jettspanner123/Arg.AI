import { zValidator } from "@hono/zod-validator";
import { BASE_USER, SAFE_BASE_USER } from "./user.types";
import { StatusCodes } from "http-status-codes";
import { z } from "zod";
import { resourceUsage } from "process";

// MARK: Template Schemas
export class SchemaHelperService {
    public static email = z.email({ error: "Email not provided!" });
    public static username = z.string({ error: "Username not provided!" });
    public static password = z
        .string({ error: "Password not provided!" })
        .min(8, { error: "Password should be minimum 8 characters long!" });
    public static firstName = z
        .string({ error: "First name not provided! " })
        .min(1, { error: "First name should be atleast 1 character." });
    public static lastName = z.string().optional();
}

// MARK: Exported Schemas
export const registerSchema = z.object({
    username: SchemaHelperService.username,
    email: SchemaHelperService.email,
    password: SchemaHelperService.password,
    firstName: SchemaHelperService.firstName,
    lastName: SchemaHelperService.lastName,
});

export const loginSchema = z.object({
    username: SchemaHelperService.username,
    password: SchemaHelperService.password,
});

// MARK: Exported Types
export type REGISTER_DTO = z.infer<typeof registerSchema>;
export type LOGIN_DTO = z.infer<typeof loginSchema>;
export type HEALTH_CHECK_RESPONSE = {
    success: boolean;
    message: string;
};
export type REGISTER_SERVICE_RESPONSE = {
    token: string;
    user: BASE_USER;
};
export type LOGIN_SERVICE_RESPONSE = {
    token: string;
    user: SAFE_BASE_USER;
};
export type LOGIN_USER_RESPONSE = {
    success: boolean;
    message: string;
    user: SAFE_BASE_USER | null;
    errors: Array<string> | string | null;
};
export type REGISTER_USER_RESPONSE = {
    success: boolean;
    message: string;
    user: BASE_USER | null;
    errors: Array<string> | null | string;
};

// MARK: Exported Validators
export const REGISTER_VALIDATOR = zValidator(
    "json",
    registerSchema,
    (result, context) => {
        if (!result.success) {
            return context.json(
                {
                    success: false,
                    message: "Invalid JSON Input!",
                    user: null,
                    errors: result.error.issues.map((err) => err.message),
                } satisfies REGISTER_USER_RESPONSE,
                StatusCodes.BAD_REQUEST,
            );
        }
    },
);

export const LOGIN_VALIDATOR = zValidator(
    "json",
    loginSchema,
    (result, context) => {
        if (!result.success) {
            return context.json(
                {
                    success: false,
                    message: "Invalid JSON Input!",
                    user: null,
                    errors: result.error.issues.map((err) => err.message),
                } satisfies LOGIN_USER_RESPONSE,
                StatusCodes.BAD_REQUEST,
            );
        }
    },
);
