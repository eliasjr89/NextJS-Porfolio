import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { DashboardLayoutProps } from "@/types/types";
import { Analytics } from "@vercel/analytics/next";
import TopMenu from "../components/navbar/TopMenu";
import Footer from "../components/footer/Footer";
import { Vortex } from "../components/vortex/vortex";

export const metadata: Metadata = {
  title: "Elias Jiminián | Portfolio",
  description: "Full Stack Developer specialized in frontend development.",
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Full Stack Developer specialized in frontend development."
        />
      </head>

      <body className="antialiased bg-background text-foreground flex flex-col min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TopMenu />
          <Analytics />

          <div className="fixed inset-0 z-[-1]">
            <Vortex backgroundColor="transparent" className="w-full h-full" />
          </div>

          <main className="relative flex-grow container mx-auto">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
