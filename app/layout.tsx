import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";
import "../styles/home.css";
import GHLChatWidget from "@/components/shared/GHLChatWidget";



const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Tanmiyat Ula",
  description: "Premium maintenance services",
  icons: {
    icon: [{ url: "/images/branding/tanmiyat-logo.png", type: "image/png" }],
    shortcut: "/images/branding/tanmiyat-logo.png",
    apple: "/images/branding/tanmiyat-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${outfit.variable} ${cormorant.variable}`}
      >

        
        {children}
        <GHLChatWidget />

      </body>
    </html>
  );
}