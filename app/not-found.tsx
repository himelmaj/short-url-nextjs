"use client";

const NotFound = () => {

    return (
        <section className='h-[45rem] px-4 py-10 text-center sm:px-6 lg:px-8 flex flex-col justify-center items-center'>
            <h1 className='block text-7xl font-bold sm:text-9xl'>404</h1>
            <p className='mt-3 '>Oops, something went wrong.</p>
            <p className=''>Sorry, we couldn&apos;t find your page.</p>
            <code className=''>{window.location.href}</code>
        </section>

    )
}

export default NotFound