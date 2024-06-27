import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import { ChildProps } from "@/types";
import { ThemeProvider } from "@/components/providers/themeProvider";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-workSans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://diyor-dev.uz"),
  title: "Diyorbek Sulaymonov",
  description: "Diyorbek's portfolio",
  authors: [{ name: "Sulaymonov Diyorbek" }],
  icons: { icon: "/favicon.png" },
  keywords:
    "diyordev, diyor-dev, diyorbek, developerdiyorbek, diyorbekdeveloper, sulaymonov diyorbek, Diyorbek Sulaymonov, DiyorDev, Sulaymonov Diyorbek, djurabayevich",
  openGraph: {
    title: "Diyorbek Sulaymonov",
    description: "Diyorbek's portfolio",
    type: "website",
    url: "https://diyor-dev.uz",
    locale: "en_EN",
    images: "/myImage.png",
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
        </ThemeProvider>
      </body>
    </html>
  );
}
