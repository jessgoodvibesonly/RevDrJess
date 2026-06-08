import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RevDrJess | Rev. Dr. Jessica Simmonds",
  description: "Ceremonies for Love, Life & Legacy by Rev. Dr. Jessica Simmonds.",
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
