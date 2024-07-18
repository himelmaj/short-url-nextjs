CREATE TABLE IF NOT EXISTS "urls_table" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"url" text NOT NULL,
	"short_url" varchar(7) DEFAULT substr(md5(random()::text), 1, 7) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL,
	CONSTRAINT "urls_table_url_unique" UNIQUE("url"),
	CONSTRAINT "urls_table_short_url_unique" UNIQUE("short_url")
);
