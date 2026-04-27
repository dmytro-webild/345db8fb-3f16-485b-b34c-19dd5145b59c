import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";



export const metadata: Metadata = {
  title: 'Enrich Ventures Business Setup Services | Dubai | Expert Corporate Solutions',
  description: 'Premium business setup services in Dubai. Expert legal entity structuring, visa processing, and corporate banking solutions for startups and enterprises.',
  openGraph: {
    "title": "Enrich Ventures Business Setup Services | Dubai",
    "description": "Establish your business in Dubai with premium corporate support.",
    "siteName": "Enrich Ventures"
  },
};

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
