"use server";

import { db } from "@/lib/db";
import { InsertUrl, SelectUrl, urlsTable } from "@/drizzle/schema";
import { asc, between, count, eq, getTableColumns, sql } from "drizzle-orm";

export const getUrls = async () : Promise<SelectUrl[]> => {
  return db.select().from(urlsTable).orderBy(asc(urlsTable.id));
}

export const getUrlById = async (id: SelectUrl["id"]) : Promise<SelectUrl[]> => {
    return db.select().from(urlsTable).where(eq(urlsTable.id, id));
}

export const createUrl = async (data: InsertUrl) => {
    await db.insert(urlsTable).values(data);
}

export const updateUrl = async (id: SelectUrl["id"], data: Partial<SelectUrl>) => {
    await db.update(urlsTable).set(data).where(eq(urlsTable.id, id));
}

export const deleteUrl = async (id: SelectUrl["id"]) => {
    await db.delete(urlsTable).where(eq(urlsTable.id, id));
}