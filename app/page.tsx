
import Form from "@/components/form";

export default function Home() {
  return (
    <section className="flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Sh<span className=" text-sm sm:text-4xl">🌐</span>rten your URLs
      </h2>
      <Form />
    </section>
  )
}