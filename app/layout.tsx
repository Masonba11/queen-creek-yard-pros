import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlobalSchema from "@/components/Schema/GlobalSchema";
import "./globals.css";

export const metadata: Metadata = {
  title: "Queen Creek Yard Pros - Professional Landscaping Services",
  description: "Expert landscaping services in Queen Creek, AZ",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  verification: {
    google: "e6RxysnbSjUJKnYbvly_BOM85P9UKbmjkc3YVwtX52Y",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalSchema />
        <Navigation />
        <main className="min-h-screen -mt-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
