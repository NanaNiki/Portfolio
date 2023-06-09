"use client";
import { GiSunPriest } from "react-icons/gi";
import { RxMoon } from "react-icons/rx"
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <button className="z-30 text-3xl m-4 dark:text-white dark:text-opacity-30 transition-all duration-200 ease-linear fixed top-0 right-0 cursor-pointer hover:text-cyan-500 dark:hover:text-amber-300">
        {theme === "light" ? (
          <RxMoon className="text-[1.52rem]" onClick={() => setTheme("dark")} />
        ) : (
          <GiSunPriest onClick={() => setTheme("light")} />
        )}
      </button>
    </>
  );
}
