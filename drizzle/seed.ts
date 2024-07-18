import { db } from "@/lib/db";

import { InsertUrl, urlsTable } from "@/drizzle/schema";
import { faker } from "@faker-js/faker";

export const generateFakeUsers = (count: number) => {
  const rows: InsertUrl[] = [];

  for (let i = 0; i < count; i++) {
    rows.push({
      url: faker.internet.url({ appendSlash: true }),
    });
  }

  return rows;
};

export const seed = async () => {
  console.log("Seeding urls... 🚀");
  
  await db.delete(urlsTable);

  const urlRows = generateFakeUsers(100);

  await db.insert(urlsTable).values(urlRows);
};

seed().catch((e) => {
    console.error(e);
    process.exit(1);
}).finally( async () => {
    console.timeEnd("DB has been seeded!🕥");
    process.exit(0);
});