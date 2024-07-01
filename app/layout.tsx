import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import { ChildProps } from "@/types";
import { ThemeProvider } from "@/components/providers/themeProvider";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-workSans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.diyor-dev.uz"),
  title: "Diyorbek Sulaymonov",
  description: "Diyorbek's portfolio",
  authors: [{ name: "Sulaymonov Diyorbek", url: "https://www.diyor-dev.uz" }],
  icons: { icon: "/favicon.png" },
  keywords:
    "diyordev, diyor-dev, diyorbek, developerdiyorbek, diyorbekdeveloper, sulaymonov diyorbek, Diyorbek Sulaymonov, DiyorDev, Sulaymonov Diyorbek, djurabayevich",
  openGraph: {
    title: "Diyorbek Sulaymonov",
    description: "Diyorbek's portfolio",
    type: "website",
    url: "https://www.diyor-dev.uz",
    locale: "uz_UZ",
    images:
      "https://lh3.googleusercontent.com/pw/AP1GczMY8bWabI0Pb2d0rtRXQisIjewIxleTbbjssR6KUAjH02ipnrf1oNYec3AGUonA7PcIxI6ew0DFz90DryXOJdpJpXQNfaRER8pGYsHmzJ3IUhRIXacOJ6rONf1RKG0ZQZfof40dlx_xdWhNyI1a5JwW=w960-h1280-s-no-gm?authuser=0",

    countryName: "Uzbekistan",
    siteName: "diyor-dev",
    emails: "diyorbeksulaymonov70@gmail.com",
  },
};

export default function RootLayout({ children }: ChildProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${workSans.variable} overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader showSpinner={false} />
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
