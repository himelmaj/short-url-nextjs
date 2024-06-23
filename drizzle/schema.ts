import { integer, pgTable, serial, text, timestamp, boolean , uuid} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm/sql';

export const urlsTable = pgTable('urls_table', {
    id: uuid('id').primaryKey().default(sql`gen_random_uuid()`),
    url: text('url').unique().notNull(),
    shortUrl: text('short_url').unique().notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().$onUpdate(() => new Date()),
});


export type InsertUrl = typeof urlsTable.$inferInsert;
export type SelectUrl = typeof urlsTable.$inferSelect;