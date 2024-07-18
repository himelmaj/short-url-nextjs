import { pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm/sql';

export const urlsTable = pgTable('urls_table', {
    id: uuid('id').primaryKey().default(sql`gen_random_uuid()`),
    url: text('url').notNull().unique(),
    shortUrl: varchar('short_url', { length: 7 }).unique().notNull().default(sql`substr(md5(random()::text), 1, 7)`),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().$onUpdate(() => new Date()),
});

export type InsertUrl = typeof urlsTable.$inferInsert;
export type SelectUrl = typeof urlsTable.$inferSelect;