import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./style/globals.css";
import Navbar from "./components/Navbar";
import TodoContextProvider from "@/context/TodoContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To do",
  description: "Generated by Moul San",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + "w-2/3 m-auto"}>
        <Navbar />
        <TodoContextProvider>{children}</TodoContextProvider>
      </body>
    </html>
  );
}