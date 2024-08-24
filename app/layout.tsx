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
      <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/HADA%2FPreviewSaas.png?alt=media&token=88c84399-0d48-4d8f-b0a6-1658d98c3149"></meta>
      <meta property="og:site_name" content="Link preview site name"></meta>
      <meta property="og:title" content="SaaS Website UI Kit — Framer Website Kit (Community)"></meta>
      <meta property="og:description" content="This project is developed with the purpose of evaluating and improving my skills in the design and development of static web pages. Through this project, I seek to challenge my ability to create attractive user interfaces, optimize the user experience" />
      <meta property="og:url" content="https://framer-website-ten.vercel.app/"></meta>
      </head>
      <body className={DMSans.className}>{children}</body>
    </html>
  );
}
