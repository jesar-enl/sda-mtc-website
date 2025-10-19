import type { Metadata } from "next"
import MinistriesClientPage from "./ministries-client"

export const metadata: Metadata = {
  title: "Ministries - Seventh-day Adventist Church Masaka Town",
  description:
    "Discover ministry opportunities at SDA Masaka Town. Youth ministry, children's programs, health ministry, music, and community outreach. Find your place to serve!",
  keywords: [
    "Church ministries Masaka",
    "Youth ministry",
    "Children's ministry",
    "Health ministry",
    "Community outreach",
    "Pathfinders",
    "Church volunteer opportunities",
  ],
  openGraph: {
    title: "Ministries - Where Every Gift Finds a Home",
    description: "Explore our diverse ministries and find your place to serve and grow",
    images: ["/ministry-collage.jpg"],
  },
  alternates: {
    canonical: "/ministries",
  },
}

export default function MinistriesPage() {
  return <MinistriesClientPage />
}
