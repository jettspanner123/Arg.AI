import { zValidator } from "@hono/zod-validator";
import { StatusCodes } from "http-status-codes";
import { z } from "zod";
import { EVENT_RESPONSE } from "./base.types";

// MARK: Exported Schemas
export const aiChatSchema = z.object({
    userId: z.string({ error: "User Id Not Provided!" }),
    prompt: z.string({ error: "Prompt Not Provided!" }).refine(
        (str) => {
            return str.split(" ").length > 2;
        },
        { error: "Prompt should be atlreast 2 words!" },
    ),
});

// MARK: Exported Types
export type AI_CHAT_DTO = z.infer<typeof aiChatSchema>;

// MARK: Exported Schemas
export const AI_CHAT_VALIDATOR = zValidator(
    "json",
    aiChatSchema,
    (result, context) => {
        if (!result.success) {
            return context.json(
                {
                    success: false,
                    message: "Invalid JSON Input!",
                    errors: result.error.issues.map((err) => err.message),
                } satisfies EVENT_RESPONSE,
                StatusCodes.BAD_REQUEST,
            );
        }
    },
);
