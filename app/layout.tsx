import type { Metadata } from "next";
import { Mozilla_Headline, Mozilla_Text } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { hasPosts } from "@/lib/writing";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const mozillaText = Mozilla_Text({
  subsets: ["latin"],
  variable: "--font-mozilla-text",
  display: "swap",
  fallback: ["system-ui", "arial"],
  adjustFontFallback: false,
});

const mozillaHeadline = Mozilla_Headline({
  subsets: ["latin"],
  variable: "--font-mozilla-headline",
  display: "swap",
  fallback: ["system-ui", "arial"],
  adjustFontFallback: false,
});

const siteUrl = "https://judecod.es";
const description = `Jude Francis is a software engineer in Lagos, Nigeria, building AI agents, SaaS platforms, and full-stack web apps with TypeScript, Python, React, and Next.js.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jude Francis · Software Engineer",
    template: "%s · Jude Francis",
  },
  description,
  keywords: [
    "Jude Francis",
    "Software Engineer",
    "AI Agents",
    "TypeScript",
    "React",
    "Next.js",
    "Python",
    "Lagos",
    "Nigeria",
  ],
  authors: [{ name: "Jude Francis", url: siteUrl }],
  creator: "Jude Francis",
  appleWebApp: {
    title: "Jude Francis",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Jude Francis",
    title: "Jude Francis · Software Engineer",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Jude Francis · Software Engineer",
    description,
    creator: "@judecodes",
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${mozillaText.variable} ${mozillaHeadline.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="pt-20 sm:pt-24 pb-10">
            <Navbar showWriting={hasPosts()} />
            {children}
            <Footer />
          </div>
          {modal}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
