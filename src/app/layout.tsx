import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const siteUrl = "https://settleup.app";
const title = "Settle Up — Open source Laravel packages";
const description =
  "Settle Up ships batteries-included Laravel packages — Visualizations and Workflowable — built in the open and MIT-licensed.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Settle Up",
  },
  description,
  keywords: [
    "Laravel",
    "open source",
    "PHP",
    "packages",
    "workflow engine",
    "data visualizations",
    "Settle Up",
    "Workflowable",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Settle Up",
    title,
    description,
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Settle Up — Open source Laravel packages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
