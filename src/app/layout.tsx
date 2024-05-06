import type { Metadata } from "next";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "VoffieOS",
  description: "VoffieDev's portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
