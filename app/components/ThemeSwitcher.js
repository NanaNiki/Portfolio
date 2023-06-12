"use client";
import { GiSunPriest } from "react-icons/gi";
import { RxMoon } from "react-icons/rx";
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
      <button className="fixed right-0 top-0 z-30 m-4 cursor-pointer text-3xl transition-all duration-200 ease-linear hover:text-cyan-500 dark:text-white dark:text-opacity-30 dark:hover:text-amber-300" aria-label="darkmode or lightmode switch">
        {theme === "light" ? (
          <RxMoon className="text-[1.52rem]" onClick={() => setTheme("dark")} />
        ) : (
          <GiSunPriest onClick={() => setTheme("light")} />
        )}
      </button>
    </>
  );
}
