import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/site-shell";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://yosefmekonnen.dev"),
  title: {
    default: "Yosef Mekonnen",
    template: "%s | Yosef Mekonnen",
  },
  description: "Software Engineer",
  keywords: [
    "Yosef Mekonnen",
    "Software Engineer",
    "Full Stack Developer",
    "AI Developer",
    "UPEI",
  ],
  openGraph: {
    title: "Yosef Mekonnen",
    description: "Software Engineer",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yosef Mekonnen",
    description: "Software Engineer",
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="noise" />
        <SiteShell>{children}</SiteShell>
        <Analytics />
      </body>
    </html>
  );
}
