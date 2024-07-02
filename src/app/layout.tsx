import type { Metadata } from "next";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "VoffieOS (Viktor S' Portfolio)",
  description:
    "Dive into my portfolio and discover the projects I've been working on!",
  openGraph: {
    title: "VoffieOS (Viktor S' Portfolio)",
    description:
      "Dive into my portfolio and discover the projects I've been working on!",
    url: "https://portfolio-voffiedevs-projects.vercel.app",
    type: "website",
    images: {
      url: "https://raw.githubusercontent.com/voffiedev/voffieos/main/public/images/selfie.webp",
      alt: "Viktor S",
    },
  },
  twitter: {
    card: "summary",
    title: "VoffieOS (Viktor S' Portfolio)",
    description:
      "Dive into my portfolio and discover the projects I've been working on!",
    images: {
      url: "https://raw.githubusercontent.com/voffiedev/voffieos/main/public/images/selfie.webp",
      alt: "Viktor S",
    },
  },
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
