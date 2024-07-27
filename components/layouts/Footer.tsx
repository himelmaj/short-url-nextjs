"use client";
import Image from "next/image";


import SupabaseIcon from "@/public/supabase.svg";
import DrizzleIcon from "@/public/drizzle.svg";
import NextIcon from "@/public/next.svg";
import VercelIcon from "@/public/vercel.svg";


const Footer = () => {

    const currentYear = new Date().getFullYear();
    return (

        <footer className="rounded-lg w-full max-w-screen-xl mx-auto flex flex-col items-center py-4 justify-center px-2 gap-6">
            <section className=" flex-col sm:flex-row gap-2 justify-center items-center select-none pointer-events-none hidden sm:flex">
                <Image src={SupabaseIcon} alt="Supabase" className="w-24" />
                <Image src={DrizzleIcon} alt="Drizzle" className="w-24 " />
                <Image src={NextIcon} alt="Next.js" className="w-14  " />
                <Image src={VercelIcon} alt="Vercel" className="w-14" />
            </section>
            <span className="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90 select-none">© {currentYear}
                <a href="https://himelmaj.vercel.app" className="hover:underline" aria-label="Himel Majumder's Links"> himelmaj</a>. All rights reserved.
            </span>
        </footer>

    )
}

export default Footer