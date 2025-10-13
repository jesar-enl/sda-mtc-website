import SeriesDetailPageClient from "./SeriesDetailPageClient"
import type { Metadata } from "next"
import { seriesData } from "@/lib/sermons-data"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const series = seriesData[params.slug as keyof typeof seriesData]

  if (!series) {
    return {
      title: "Series Not Found - @SDAMTC",
    }
  }

  return {
    title: `${series.name} - Sermon Series`,
    description: series.description,
  }
}

export default function SeriesDetailPage({ params }: { params: { slug: string } }) {
  return <SeriesDetailPageClient params={params} />
}
