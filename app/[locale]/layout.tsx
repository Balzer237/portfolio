import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import Sidebar from "../_components/sideBar";

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
  params
}: {
  children: React.ReactNode;
  params:{locale:string}
}) {
  console.log('je suis le params',params.locale)
   const messages = await import(`../../locales/fr.json`);
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-gray-100`}>
        
         <NextIntlClientProvider locale={params.locale} messages={messages}>
            <div className="flex w-full">
              <div className="">
                <Sidebar />
              </div>

              <main className="w-full lg:ml-[15%] min-h-screen">
                {children}
              </main>
            </div>
          </NextIntlClientProvider>
          

      </body>
    </html>
  );
}
