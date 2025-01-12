import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Kokoro TTS - State-of-the-art AI Text-to-Speech Model",
  description: "Transform text into natural-sounding speech with Kokoro TTS, a cutting-edge AI text-to-speech model. Experience high-quality voice synthesis for your content.",
  keywords: "AI text to speech, TTS, voice synthesis, speech generation, artificial intelligence, Kokoro TTS, text to speech converter",
  authors: [{ name: "syv.ai" }],
  creator: "Kokoro TTS",
  publisher: "Kokoro TTS",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kokoro-tts.com",
    title: "Kokoro TTS - State-of-the-art AI Text-to-Speech Model",
    description: "Transform text into natural-sounding speech with Kokoro TTS, a cutting-edge AI text-to-speech model.",
    siteName: "Kokoro TTS",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kokoro TTS - State-of-the-art AI Text-to-Speech Model",
    description: "Transform text into natural-sounding speech with Kokoro TTS, a cutting-edge AI text-to-speech model.",
    creator: "@kokorotts",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
        <link rel="canonical" href="https://kokoro-tts.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
