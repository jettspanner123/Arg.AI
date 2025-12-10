import { google } from "@ai-sdk/google";
import Database from "../../db/client.js";
import { streamText } from "ai";

const db = Database.getInstance();

export default class AIService {
    async streamResponse(prompt: string, userId: string) {
        const result = streamText({
            model: AIHelperService.googleModel,
            prompt,
        });
        return result;
    }
}

export class AIHelperService {
    public static googleModel = google("gemini-2.5-flash");
}
