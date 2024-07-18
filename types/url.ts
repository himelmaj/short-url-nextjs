import { z } from 'zod';

export const urlSchema = z.object({
    url: z.string().url({message: "Not a valid URL"}).min(1, { message: "URL is required" }).max(2048, { message: "URL is too long" }),
});