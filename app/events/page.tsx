import type { Metadata } from "next"
import EventsClient from "./EventsClient"

export const metadata: Metadata = {
  title: "Events & Activities - Seventh-day Adventist Church Masaka Town",
  description:
    "Join us for upcoming events at SDA Masaka Town. Sabbath worship, youth programs, community outreach, health fairs, and special gatherings. All are welcome!",
  keywords: [
    "Church events Masaka",
    "Sabbath worship",
    "Youth events",
    "Community programs",
    "Health fair",
    "Church activities Uganda",
  ],
  openGraph: {
    title: "Events & Activities - SDA Masaka Town",
    description: "Gather, worship, and grow together at our upcoming events",
    images: ["/masaka-church-scenic.jpg"],
  },
  alternates: {
    canonical: "/events",
  },
}

export default function EventsPage() {
  return <EventsClient />
}
