export type EVENT_RESPONSE = {
    success: boolean;
    message: string;
    errors: Array<string> | string | null;
};
