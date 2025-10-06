import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SentAuth - Stop guessing. Start knowing.",
  description: "Your users aren't just passwords. They're patterns, behaviors, habits. We analyze the way they move to keep them safe.",
  keywords: ["behavioral biometrics", "authentication", "fraud detection", "account security", "risk-based authentication"],
  authors: [{ name: "SentAuth" }],
  creator: "SentAuth",
  publisher: "SentAuth",
  metadataBase: new URL("https://sentauth.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sentauth.com",
    title: "SentAuth - Stop guessing. Start knowing.",
    description: "Your users aren't just passwords. They're patterns, behaviors, habits. We analyze the way they move to keep them safe.",
    siteName: "SentAuth",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "SentAuth - Behavioral Authentication",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SentAuth - Stop guessing. Start knowing.",
    description: "Your users aren't just passwords. They're patterns, behaviors, habits. We analyze the way they move to keep them safe.",
    images: ["/api/og"],
    creator: "@sentauth",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-bg-primary text-text-primary`}>
        {children}
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "SentAuth",
              applicationCategory: "SecurityApplication",
              description: "Behavioral biometrics and risk-based authentication platform for account security and fraud prevention.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "127",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is behavioral biometrics?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Behavioral biometrics analyzes unique patterns in how users interact with devices - typing rhythm, mouse movements, touch pressure, and navigation habits - to verify identity continuously and passively.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does SentAuth protect user privacy?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "SentAuth processes behavioral data using hashed, anonymized tokens. No personally identifiable information (PII) is required for detection. All data is encrypted in transit and at rest, and we are GDPR and CCPA compliant.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can SentAuth integrate with existing authentication systems?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, SentAuth works seamlessly with OAuth2, SAML, and custom authentication flows. Integration requires minimal code changes and can be deployed without disrupting existing user experiences.",
                  },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
