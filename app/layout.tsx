import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ChurchLayout } from "@/components/church-layout"

export const metadata: Metadata = {
  title: "Masaka Town Seventh-day Adventist Church",
  description:
    "A Family of Faith, Preparing for Christ's Soon Return - Join us for worship, fellowship, and spiritual growth in Masaka Town, Uganda. Sabbath services, youth programs, community outreach.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Seventh-day Adventist",
    "SDA",
    "Church",
    "Masaka",
    "Uganda",
    "Worship",
    "Faith",
    "Community",
    "Sabbath",
    "Bible Study",
    "Youth Ministry",
    "Pathfinders",
    "Health Ministry",
    "Evangelism",
  ],
  authors: [{ name: "Jesse Kyambadde" }],
  creator: "Jesse Kyambadde",
  publisher: "Masaka Town SDA Church",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://masakasda.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Masaka Town Seventh-day Adventist Church",
    description:
      "A Family of Faith, Preparing for Christ's Soon Return - Join us for worship, fellowship, and spiritual growth in Masaka Town, Uganda.",
    url: "https://masakasda.org",
    siteName: "Masaka Town SDA Church",
    images: [
      {
        url: "/modern-welcoming-church.png",
        width: 1200,
        height: 630,
        alt: "Masaka Town Seventh-day Adventist Church",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Masaka Town Seventh-day Adventist Church",
    description: "A Family of Faith, Preparing for Christ's Soon Return",
    images: ["/modern-welcoming-church.png"],
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
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ChurchLayout>{children}</ChurchLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
