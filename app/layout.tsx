import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const DMSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaaS Website UI Kit — Framer Website Kit (Community)",
  description: "This project is developed with the purpose of evaluating and improving my skills in the design and development of static web pages. Through this project, I seek to challenge my ability to create attractive user interfaces, optimize the user experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
      <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/HADA%2FPreviewSaas.png?alt=media&token=be97f5fa-de6f-4371-bfe9-2b04dab6c279"/>
      </head>
      <body className={DMSans.className}>{children}</body>
    </html>
  );
}
