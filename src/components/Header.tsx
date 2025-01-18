"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";

export const Header = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className='w-full py-4 px-8 flex justify-between items-center bg-primary-bg dark:bg-dark-primary-bg text-primary-text dark:text-dark-primary-text'>
      <nav className='flex gap-8'>
        <Link
          href='/'
          className={`font-heading hover:opacity-70 transition-opacity ${
            pathname === "/" ? "underline underline-offset-8" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href='/cv'
          className={`font-heading hover:opacity-70 transition-opacity ${
            pathname === "/cv" ? "underline underline-offset-8" : ""
          }`}
        >
          CV
        </Link>
        <Link
          href='/lab'
          className={`font-heading hover:opacity-70 transition-opacity ${
            pathname === "/lab" ? "underline underline-offset-8" : ""
          }`}
        >
          Lab
        </Link>
      </nav>
      <button
        onClick={toggleTheme}
        className='text-xl hover:opacity-70 transition-opacity'
      >
        {theme === "light" ? "☀️" : "🌙"}
      </button>
    </header>
  );
};
