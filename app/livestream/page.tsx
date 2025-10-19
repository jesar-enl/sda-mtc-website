import type { Metadata } from "next"
import LivestreamClientPage from "./livestream-client"

export const metadata: Metadata = {
  title: "Live Worship Service - Seventh-day Adventist Church Masaka Town",
  description:
    "Watch our live Sabbath worship service online every Saturday at 8:30 AM EAT. Join us from anywhere in the world for inspiring worship and biblical teaching.",
  keywords: [
    "Live church service",
    "Online worship",
    "Sabbath livestream",
    "SDA live service",
    "Watch church online",
    "Virtual worship",
  ],
  openGraph: {
    title: "Worship With Us From Anywhere - Live Streaming",
    description: "Join our live Sabbath services every Saturday at 8:30 AM EAT",
    images: ["/congregation-worship.jpg"],
  },
  alternates: {
    canonical: "/livestream",
  },
}

export default function LivestreamPage() {
  return <LivestreamClientPage />
}
