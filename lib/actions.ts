"use server";

import { db } from "@/lib/db";
import { urlsTable, SelectUrl } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { actionClient } from "@/lib/safe-action";
import { urlSchema } from "@/types/url";
import { rateLimit } from "./rate-limit";
import { headers } from "next/headers";


export const createUrl = actionClient.schema(urlSchema).action(async ({ parsedInput: { url } }) => {
    try {
        // rate limit
        const ip = headers().get('x-forwarded-for');
        const { success: limitReached } = await rateLimit.limit(ip!);
        if (!limitReached) return { error: `Rate limit reached` };


        // check if url already exists
        const foundUrl = await db.query.urlsTable.findFirst({ where: eq(urlsTable.url, url), columns: { shortUrl: true } });
        if (foundUrl) return { success: foundUrl };

        // create new url
        const [newUrl] = await db.insert(urlsTable).values({ url }).returning({ shortUrl: urlsTable.shortUrl });


        return { success: newUrl };

    } catch (err) {
        return { error: err };
    }
});


export const getUrlByShortUrl = async (shortUrl: SelectUrl["shortUrl"]) => {
    try {
        // check if url exists
        const foundUrl = await db.query.urlsTable.findFirst({ where: eq(urlsTable.shortUrl, shortUrl), columns: { url: true } });

        // if not found
        if (!foundUrl) return null;

        // if found
        return { success: foundUrl }
    } catch (err) {
        return { error: err }
    }
}