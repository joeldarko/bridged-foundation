import type { Metadata, Viewport } from "next";
import { Sora, Figtree } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TransitionProvider } from "@/components/transition/TransitionProvider";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.fullName} — ${site.tagline}`,
    template: `%s | ${site.fullName}`,
  },
  description: site.description,
};

export const viewport: Viewport = {
  themeColor: "#f4f7fc",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${figtree.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <TransitionProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}
