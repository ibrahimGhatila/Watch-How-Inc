import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Watch How Inc. | Full-Service GTM Agency",
    template: "%s | Watch How Inc.",
  },
  description:
    "Watch How Inc. is a full-service GTM agency that synchronizes Content, Paid Ads, Outbound, and Web Management into a single automated revenue flywheel.",
  keywords: [
    "GTM agency",
    "go-to-market strategy",
    "B2B marketing agency",
    "outbound marketing",
    "paid ads management",
    "content marketing",
    "web management",
    "revenue flywheel",
  ],
  authors: [{ name: "Watch How Inc.", url: siteUrl }],
  creator: "Watch How Inc.",
  publisher: "Watch How Inc.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Watch How Inc.",
    title: "Watch How Inc. | Full-Service GTM Agency",
    description:
      "Content, Paid Ads, Outbound, and Web Management — synchronized into a single automated revenue flywheel.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Watch How Inc. | Full-Service GTM Agency",
    description:
      "Content, Paid Ads, Outbound, and Web Management — synchronized into a single automated revenue flywheel.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#1D6B44",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Watch How Inc.",
  url: siteUrl,
  email: "info@watchhow.co",
  description:
    "Full-service GTM agency that synchronizes Content, Paid Ads, Outbound, and Web Management into a single automated revenue flywheel.",
  logo: `${siteUrl}/icon.svg`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-base text-text-primary antialiased selection:bg-gtm-green selection:text-base">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
