import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: './drizzle/schema.ts',
    out: './supabase/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
    verbose: true,
    strict: true,
});