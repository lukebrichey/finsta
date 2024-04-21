import "~/styles/globals.css";

import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

import { TRPCReactProvider } from "../trpc/react";
import SidePanel from "../components/SidePanel";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Finsta",
  description: "Instagram, but better",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="min-h-screen flex bg-black text-white">
          <div className="w-64">
            <SidePanel />
          </div>
          <div className="flex-1">
            <TRPCReactProvider>
              {children}
            </TRPCReactProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
