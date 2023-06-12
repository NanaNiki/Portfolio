import "./globals.css";
import { Montserrat } from "next/font/google";
import Providers from "./components/ThemeProvider";
import ThemeSwitcher from "./components/ThemeSwitcher";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300"] });

export const metadata = {
  title: "Nicol Wesołowska",
  description: "Build with next.js, hosted by netlify <3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className={`${montserrat.className}`}>
        <Providers>
          <ThemeSwitcher />
          {children}
        </Providers>
      </body>
    </html>
  );
}
