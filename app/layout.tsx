import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RevDrJess",
  description: "Honouring Love, Life & Legacy",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
