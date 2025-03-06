import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Outfit } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Utkarsh Singhal | Software Developer",
  description:
    "Software developer specializing in Next.js, TypeScript and Node.js.",
  openGraph: {
    title: "Utkarsh Singhal | Software Developer",
    description:
      "Software developer specializing in Next.js, TypeScript, and Node.js. Experienced in building scalable, high-performance applications.",
    url: "https://utkarsh-singhal.is-a.dev/",
    type: "website",
    images: [
      {
        url: "https://utkarsh-singhal.is-a.dev/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Utkarsh Singhal | Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  authors: [
    { name: "Utkarsh Singhal", url: "https://utkarsh-singhal.is-a.dev/" },
  ],
  keywords: [
    "Utkarsh Singhal",
    "Software Developer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AWS",
    "GCP",
    "MongoDB",
    "Firebase",
    "Tailwind CSS",
    "Web Development",
  ],
  creator: "Utkarsh Singhal",
  publisher: "Utkarsh Singhal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning>
      <Head>
        <meta
          name="google-site-verification"
          content="VDwFh_D1CuZ99dn0xRnrfO_2lEOvp-0O3GueEFSQHeI"
        />
      </Head>
      <body
        className={`${outfit.className} w-screen min-h-screen m-0 p-0 overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
