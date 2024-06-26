import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="bg-[#0F1117] min-h-screen">
            {/* <div className="dark"> */}
            <Header />
            {/* </div> */}
            <div className="max-w-7xl mx-auto text-white">
            {children}
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
