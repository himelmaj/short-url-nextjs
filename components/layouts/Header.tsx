"use client";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const Header = () => {

    return (
        <header
            className=" flex w-full flex-wrap pb-3 text-sm sm:flex-nowrap sm:justify-start"
        >
            <nav
                className="relative mx-auto flex w-full items-center justify-between sm:flex sm:items-center"
                aria-label="global"
            >
                <Link href="/">
                    <h2 className="flex-none text-xl font-semibold" aria-label="Brand">sh🌐rthen</h2>
                </Link>

                <a href="https://github.com/himelmaj/short-url-nextjs">
                    <GitHubLogoIcon  className="w-6 h-6" />
                </a>
            </nav>
        </header>
    )
}

export default Header