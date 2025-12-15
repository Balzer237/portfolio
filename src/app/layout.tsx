import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./_components/sideBar";
import ClientWrapper from "../lib/lenis/wrapper";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio – Kevin",
  description: "Portfolio professionnel de Kevin",
};

export  default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
 
}) {
 
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-gray-100`}>
        
         
            <div className="flex w-full">
              <div className="">
                <Sidebar />
              </div>

              <main className="w-full lg:ml-[15%] min-h-screen bg-gray-800">
                <ClientWrapper>{children}</ClientWrapper>
              </main>
            </div>
          

      </body>
    </html>
  );
}
