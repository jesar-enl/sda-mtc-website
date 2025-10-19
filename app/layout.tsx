import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ChurchLayout } from "@/components/church-layout"
import { StructuredData } from "@/components/structured-data"

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Seventh-day Adventist Church Masaka Town - A Family of Faith",
    template: "%s | SDA Masaka Town",
  },
  description:
    "A vibrant, English-speaking SDA church family in the heart of Masaka City, serving students, internationals, and families at large. Join us for Sabbath worship, fellowship, and spiritual growth.",
  generator: "v0.app",
  applicationName: "SDA Masaka Town Church Website",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
    "Christian Church",
    "Adventist Church Uganda",
    "Masaka Town Church",
    "English-speaking church",
    "International church",
    "Student ministry",
  ],
  authors: [{ name: "Jesse Kyambadde", url: "https://masakasda.org" }],
  creator: "Jesse Kyambadde",
  publisher: "Seventh-day Adventist Church Masaka Town",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://masakasda.org"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "lg-UG": "/",
    },
  },
  openGraph: {
    title: "Seventh-day Adventist Church Masaka Town",
    description:
      "A vibrant, English-speaking SDA church family in the heart of Masaka City, serving students, internationals, and families at large.",
    url: "https://masakasda.org",
    siteName: "SDA Masaka Town Church",
    images: [
      {
        url: "/modern-welcoming-church.png",
        width: 1200,
        height: 630,
        alt: "Seventh-day Adventist Church Masaka Town - Welcome Home",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seventh-day Adventist Church Masaka Town",
    description: "A Family of Faith, Preparing for Christ's Soon Return",
    images: ["/modern-welcoming-church.png"],
    creator: "@SDAMasakaTown",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  category: "religion",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={notoSans.variable}>
      <head>
        <StructuredData />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ChurchLayout>{children}</ChurchLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
