"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";

export const Header = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className='w-full py-4 px-8 flex md:grid md:grid-cols-3 items-center bg-primary-bg dark:bg-dark-primary-bg text-primary-text dark:text-dark-primary-text'>
      <nav className='flex gap-8 md:gap-20 md:col-start-2 md:justify-center'>
        <Link
          href='/'
          className={`font-heading hover:opacity-70 transition-all text-xl md:text-4xl hover:-translate-y-0.5 ${
            pathname === "/" ? "underline underline-offset-8" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href='/cv'
          className={`font-heading hover:opacity-70 transition-all text-xl md:text-4xl hover:-translate-y-0.5 ${
            pathname === "/cv" ? "underline underline-offset-8" : ""
          }`}
        >
          CV
        </Link>
        <Link
          href='/lab'
          className={`font-heading hover:opacity-70 transition-all text-xl md:text-4xl hover:-translate-y-0.5 ${
            pathname === "/lab" ? "underline underline-offset-8" : ""
          }`}
        >
          Lab
        </Link>
      </nav>
      <div className='h-8 md:h-10 flex items-center justify-end md:col-start-3 md:justify-end w-full'>
        {mounted && (
          <button
            onClick={toggleTheme}
            className='text-2xl md:text-4xl md:hover:blur-sm transition-all duration-200 opacity-0 animate-fade-in active:blur-md active:opacity-50 active:animate-spin'
          >
            {theme === "light" ? "🌞" : "🌙"}
          </button>
        )}
      </div>
    </header>
  );
};
