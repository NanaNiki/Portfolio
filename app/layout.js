import "./globals.css";
import Loading from "./loading";
import { Suspense } from "react";;

export const metadata = {
  title: "Nicol Wesołowska Portfolio",
  description: "Build with next.js, hosted by netlify <3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
    <link rel="shortcut icon" type="image/png" href="/logotab.png" />
    <Suspense
        fallback={<Loading />}
      >
      <body>
        {children}
      </body>
      </Suspense>
    </html>
  );
}