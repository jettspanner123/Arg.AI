import { Hono, MiddlewareHandler } from "hono";
import {
    AI_CHAT_DTO,
    AI_CHAT_VALIDATOR,
} from "../../../../shared/types/ai.types.js";
import AIController from "./ai.controller.js";
import { streamText } from "ai";
import { AIHelperService } from "./ai.service.js";

const aiRouter = new Hono();

aiRouter.post(
    "/chat",
    AI_CHAT_VALIDATOR as unknown as MiddlewareHandler,
    // AIController.streamChat,
    async (context) => {
        //@ts-ignore
        const { prompt }: AI_CHAT_DTO = context.req.valid("json");
        const { textStream } = await streamText({
            model: AIHelperService.googleModel,
            prompt,
        });

        const stream = new ReadableStream({
            async start(controller) {
                try {
                    for await (const chunk of textStream) {
                        controller.enqueue(chunk);
                    }
                    controller.close();
                } catch (err: any) {
                    controller.error(err);
                }
            },
        });

        return new Response(stream, {
            headers: {
                "Content-Type": "text/plain",
            },
        });

        // for await (const text of textStream) {
        //     process.stdout.write(text);
        // }
        // process.stdout.write("\n");
        // return context.text("Hello, world");
    },
);

export default aiRouter;
