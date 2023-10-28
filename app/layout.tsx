import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeToggle from "@/components/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kane | Personal Portfolio",
  description: "Kane is a full-stack developer with 2 years experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bb-slate-50 text-slate-950 relative pt-28 sm:pt-36`}
      >
        <div className="bg-[#e9c0e8] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.23rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#c7dae6] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
        <ThemeToggle />
      </body>
    </html>
  );
}
