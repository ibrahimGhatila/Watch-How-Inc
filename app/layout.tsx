import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Watch How Inc. | GTM Agency",
  description: "Watch how we 10x your revenue. One Unified GTM Engine.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-base text-text-primary antialiased selection:bg-gtm-green selection:text-base">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
