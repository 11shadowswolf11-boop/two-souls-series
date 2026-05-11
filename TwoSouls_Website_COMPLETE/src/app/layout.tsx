import type { Metadata } from "next";
import "../styles/globals.css";
import { Cursor }      from "@/components/ui/Cursor";
import { OceanCanvas } from "@/components/ui/OceanCanvas";

export const metadata: Metadata = {
  title:       "Two Souls Series — Shadow Wolf",
  description: "Six books. Six soundtracks. One journey without end.",
  openGraph: {
    title:       "Two Souls Series — Shadow Wolf",
    description: "A cinematic literary universe. Heal. Reconnect. Rise.",
    type:        "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-void text-pearl antialiased overflow-x-hidden">
        <OceanCanvas />
        <Cursor />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
