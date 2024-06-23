"use client";

import { PlaceholdersAndVanishInput } from "./placeholders-and-vanish-input";

const input = () => {
  const placeholders = [
    "Enter your long URL here...",
    "e.g. https://github.com/himelmaj",
    "e.g. https://twitter.com/roy2hz",
    "e.g. https://example.com",
    "e.g. https://google.com",
    "e.g. https://linkedin.com/in/himelmaj",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        🌐 Shorten your URLs

      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default input;
