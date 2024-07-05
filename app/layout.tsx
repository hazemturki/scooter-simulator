import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scooter Simulators",
  description: "Provided by the cylinders alliance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex flex-col justify-center items-center py-4 border-b gap-1">
          <h1 className="text-3xl">Scooter Simulators</h1>
          <h6 className="text-xs">Provided by the cylinders alliance</h6>

          <ul className="flex items-center justify-center gap-5">
            <li>
              <a className="hover:underline" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/rules">
                Game Rules
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/game">
                Play Game
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/eggs">
                Eggs
              </a>
            </li>
          </ul>
        </header>
        {children}
      </body>
    </html>
  );
}
