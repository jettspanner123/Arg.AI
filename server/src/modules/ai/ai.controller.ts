import { Context } from "hono";
import AIService from "./ai.service.js";
import { EVENT_RESPONSE } from "../../../../shared/types/base.types.js";
import { StatusCodes } from "http-status-codes";
import { AI_CHAT_DTO } from "../../../../shared/types/ai.types.js";

const aiService = new AIService();

export default class AIController {
    public static async streamChat(context: Context) {
        try {
            //@ts-ignore
            const { prompt, userId }: AI_CHAT_DTO = context.req.valid("json");
            const data = await aiService.streamResponse(prompt, userId);
            return data.toTextStreamResponse();
        } catch (err: any) {
            return context.json(
                {
                    success: false,
                    message: "AI Stream Unsuccessfull!",
                    errors: err instanceof Error ? err.message : err,
                } satisfies EVENT_RESPONSE,
                StatusCodes.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
