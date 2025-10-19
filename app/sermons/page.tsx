import type { Metadata } from "next"
import SermonsClientPage from "./sermons-client"

export const metadata: Metadata = {
  title: "Sermons & Messages - Seventh-day Adventist Church Masaka Town",
  description:
    "Watch and listen to inspiring sermons from Seventh-day Adventist Church Masaka Town. Biblical messages for spiritual growth, available online anytime.",
  keywords: [
    "SDA sermons",
    "Adventist messages",
    "Bible preaching",
    "Christian sermons Uganda",
    "Sabbath sermons",
    "Online church messages",
  ],
  openGraph: {
    title: "Sermons & Messages - SDA Masaka Town",
    description: "Inspiring biblical messages for spiritual growth and encouragement",
    images: ["/open-bible-hero.jpg"],
  },
  alternates: {
    canonical: "/sermons",
  },
}

export default function SermonsPage() {
  return <SermonsClientPage />
}
