"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";

export const Header = () => {
  const pathname = usePathname();
  console.log("Current pathname:", pathname);
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    console.log("Pathname changed to:", pathname);
  }, [pathname]);

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
      <div className='w-8 h-8 flex items-center justify-center'>
        {mounted && (
          <button
            onClick={toggleTheme}
            className='text-xl hover:blur-sm transition-all duration-200 opacity-0 animate-fade-in'
          >
            {theme === "light" ? "☀️" : "🌙"}
          </button>
        )}
      </div>
    </header>
  );
};
