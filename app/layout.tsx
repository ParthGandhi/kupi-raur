import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PHProvider, PostHogPageview } from "./providers";
import { ReactNode, Suspense } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kupi Raur",
  description: "GPT generated poetry in the style of Rupi Kaur",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Suspense>
        <PostHogPageview />
      </Suspense>
      <PHProvider>
        <body className={inter.className}>{children}</body>
      </PHProvider>
    </html>
  );
}
