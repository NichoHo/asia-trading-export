import "../styles/global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "react-tooltip/dist/react-tooltip.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from "next/script";

export const metadata = {
  title: "Asia Trading Export | Premium Coconut Charcoal Manufacturer & Exporter",
  description:
    "Asia Trading Export is Indonesia’s leading manufacturer and exporter of premium coconut shell charcoal. Eco-friendly, smokeless, and long-burning — trusted worldwide for shisha, BBQ, and industrial use.",
  keywords:
    "coconut charcoal, coconut shell charcoal, Indonesia charcoal exporter, shisha charcoal, BBQ charcoal, sustainable charcoal, eco-friendly charcoal, charcoal supplier Asia",
  openGraph: {
    title: "Asia Trading Export | Premium Coconut Charcoal Manufacturer & Exporter",
    description:
      "Exporting top-grade coconut shell charcoal from Indonesia — eco-friendly, odorless, and long-lasting. Perfect for shisha, BBQ, and industrial applications.",
    url: "https://asiatradingexport.com",
    siteName: "Asia Trading Export",
    images: [
      {
        url: "https://asiatradingexport.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Premium Indonesian coconut shell charcoal by Asia Trading Export",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ JSON-LD Structured Data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Asia Trading Export",
              url: "https://asiatradingexport.com",
              logo: "https://asiatradingexport.com/logo.png",
              description:
                "Asia Trading Export is a trusted Indonesian manufacturer and exporter of premium coconut shell charcoal for shisha, BBQ, and industrial use. Sustainable, smokeless, and eco-friendly.",
              foundingDate: "2004",
              address: {
                "@type": "PostalAddress",
                addressCountry: "Indonesia",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Sales",
                email: "info@asiatradingexport.com",
                telephone: "+62 878 7286 1273",
                areaServed: "Worldwide",
              },
              makesOffer: {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: "Premium Coconut Shell Charcoal",
                  description:
                    "High-quality, eco-friendly coconut charcoal made from 100% natural coconut shells. Ideal for shisha, BBQ, and industrial applications.",
                  brand: "Asia Trading Export",
                },
              },
            }),
          }}
        />
      </head>
      <body className="font-sans bg-white text-gray-900 scroll-smooth">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
