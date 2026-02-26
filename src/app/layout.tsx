import type { Metadata } from "next";
import { RetroFooter } from "@/components/retro/RetroFooter";
import { RetroHeader } from "@/components/retro/RetroHeader";
import { RetroNav } from "@/components/retro/RetroNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yuki's Personal Website",
  description: "90年代風の個人サイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <div className="retro-page">
          <RetroHeader />
          <RetroNav />
          <main className="retro-main">{children}</main>
          <RetroFooter />
        </div>
      </body>
    </html>
  );
}
