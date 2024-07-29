import { NextResponse, NextRequest } from 'next/server';
import { db } from "@/lib/db";
import { urlsTable } from "@/drizzle/schema";
import { lt } from "drizzle-orm";

export async function GET(req: NextRequest) {
  try {
    if (req.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }
    
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

    const deleteUrlsAfterOneWeek = await db.delete(urlsTable)
      .where(lt(urlsTable.createdAt, oneWeekAgo))
      .returning({ deletedUrlId: urlsTable.id });
    
    return NextResponse.json({
      success: true,
      deletedCount: deleteUrlsAfterOneWeek.length,
      date: new Date().toISOString()
    });

  } catch (error) {
    
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}