"use server"

import { getUrlByShortUrl } from "@/lib/actions"
import { notFound, redirect } from "next/navigation"


const page = async ({ params }: { params: { shortUrl: string } }) => {

    const { shortUrl } = params

    const data = await getUrlByShortUrl(shortUrl)
    
    if (!data) notFound()

    return redirect(data.success?.url || '/')
}

export default page;