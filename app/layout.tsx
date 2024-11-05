import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import { ChildProps } from "@/types";
import { ThemeProvider } from "@/components/providers/themeProvider";
import { Toaster } from "@/components/ui/sonner";
import Snowfall from "react-snowfall";

import "./globals.css";
import MainProvider from "@/components/providers/Provider";

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
    images: "https://www.diyor-dev.uz/myPhoto.jpg",
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
          <MainProvider>{children}</MainProvider>
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-T434QWZ4EZ" />
    </html>
  );
}
