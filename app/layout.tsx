import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syahrul Safarudin Hasan | Backend Engineer",
  description: "Portfolio of Syahrul Safarudin Hasan, Backend Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
