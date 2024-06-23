"use client";

const Header = () => {
    return (
        <header
            className="mb-12 flex w-full flex-wrap pb-3 text-sm sm:flex-nowrap sm:justify-start"
        >
            <nav
                className="relative mx-auto flex w-full items-center justify-between sm:flex sm:items-center"
                aria-label="global"
            >
                <h1 className="flex-none text-xl font-semibold" aria-label="Brand">shrthat</h1>

                <div className="flex flex-row items-center justify-center gap-x-5 sm:gap-x-7">

                </div>
            </nav>
        </header>
    )
}

export default Header