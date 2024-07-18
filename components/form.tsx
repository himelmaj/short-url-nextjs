"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { placeholders, toastStyle } from "@/lib/constants";
import { createUrl } from "@/lib/actions";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAction } from "next-safe-action/hooks";
import { urlSchema } from "@/types/url";
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast'


export default function Form() {

    const { handleSubmit, register, formState: { errors }, reset, watch } = useForm<z.infer<typeof urlSchema>>({
        resolver: zodResolver(urlSchema),
        defaultValues: {
            url: "",
        }
    })

    const value = watch("url");

    const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        const startAnimation = () => {
            interval = setInterval(() => {
                setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
            }, 1500);
        };
        startAnimation();
        return () => clearInterval(interval);
    }, []);


    const { execute, status } = useAction(createUrl, {
        onSuccess: (res) => {


            if (res.data?.error) {
                toast(`${res.data.error}`, {
                    icon: toastStyle.error.icon, style: toastStyle.error.style
                });
            }
            if (res.data?.success) {
                toast(`Copied to clipboard`, {
                    icon: toastStyle.success.icon, style: toastStyle.success.style
                });
                navigator.clipboard.writeText(`${window.location.origin}/${res.data.success.shortUrl}`);
                reset();
            }
            

        },
        onError: (err) => {
            console.error("Error creating URL", err);
            toast(`Error creating URL`, {
                icon: toastStyle.error.icon, style: toastStyle.error.style
            })
        }
    });

    const onSubmit = handleSubmit((data: z.infer<typeof urlSchema>) => {
        execute(data);
    });


    return (
        <>
            <form
                className={cn(
                    "w-full relative max-w-xl mx-auto bg-white dark:bg-zinc-800 h-12 rounded-full overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200",
                    value && "bg-gray-50"
                )}
                onSubmit={onSubmit}
            >

                <input
                    type="text"
                    className={cn(
                        "w-full relative text-sm sm:text-base z-50 border-none dark:text-white bg-transparent text-black h-full rounded-full focus:outline-none focus:ring-0 pl-4 sm:pl-10 pr-20",
                        errors.url && "dark:text-red-500"
                    )}
                    {...register("url")}
                />


                <button
                    disabled={status === "executing" || !value}
                    type="submit"
                    className="absolute right-2 top-1/2 z-50 -translate-y-1/2 h-8 w-8 rounded-full disabled:bg-gray-100 bg-black dark:bg-zinc-900 dark:disabled:bg-zinc-800 transition duration-200 flex items-center justify-center"
                >
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-300 h-4 w-4"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <motion.path
                            d="M5 12l14 0"
                            initial={{
                                strokeDasharray: "50%",
                                strokeDashoffset: "50%",
                            }}
                            animate={{
                                strokeDashoffset: value ? 0 : "50%",
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "linear",
                            }}
                        />
                        <path d="M13 18l6 -6" />
                        <path d="M13 6l6 6" />
                    </motion.svg>
                </button>

                <div className="absolute inset-0 flex items-center rounded-full pointer-events-none">
                    <AnimatePresence mode="wait">
                        {!value && (
                            <motion.p
                                initial={{
                                    y: 5,
                                    opacity: 0,
                                }}
                                key={`current-placeholder-${currentPlaceholder}`}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                }}
                                exit={{
                                    y: -15,
                                    opacity: 0,
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "linear",
                                }}
                                className="dark:text-zinc-500 text-sm sm:text-base font-normal text-neutral-500 pl-4 sm:pl-12 text-left w-[calc(100%-2rem)] truncate"
                            >
                                {placeholders[currentPlaceholder]}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </form>

            {errors.url && <span className="text-red-500 pl-10 pt-2 uppercase text-xs w-full relative max-w-xl mx-auto">{errors.url.message}</span>}
        </>

    );
}
