"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Download, Calendar, Clock, ArrowLeft, TrendingUp } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SocialShareButtons } from "@/components/social-share-buttons"
import { seriesData, sermonsData } from "@/lib/sermons-data"

export default function SeriesDetailPageClient({ params }: { params: { slug: string } }) {
  const series = seriesData[params.slug as keyof typeof seriesData]

  if (!series) {
    notFound()
  }

  const seriesSermons = series.sermons.map((id) => sermonsData[id as keyof typeof sermonsData])

  return (
    <div className="lg:pr-[14.28%]">
      <div className="px-4 pt-4">
        <Link href="/sermons">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Sermons
          </Button>
        </Link>
      </div>

      <section
        className="relative py-24 px-4 bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${series.thumbnail}')`,
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-orange-600 text-white text-lg px-4 py-2">Sermon Series</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{series.name}</h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">{series.description}</p>
          <div className="flex items-center justify-center gap-4 text-lg">
            <span>{seriesSermons.length} Sermons</span>
            <span>•</span>
            <span>
              {seriesSermons.reduce((total, sermon) => {
                const minutes = Number.parseInt(sermon.duration)
                return total + (isNaN(minutes) ? 0 : minutes)
              }, 0)}{" "}
              minutes total
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Sermons in This Series</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seriesSermons.map((sermon) => (
              <Card key={sermon.id} className="overflow-hidden hover:shadow-xl transition-all">
                <div className="relative">
                  <img
                    src={sermon.thumbnail || "/placeholder.svg"}
                    alt={sermon.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button
                      size="lg"
                      className="bg-white text-black hover:bg-gray-100"
                      onClick={() => window.open(sermon.youtubeUrl, "_blank")}
                    >
                      <Play className="h-5 w-5 mr-2" />
                      Watch Now
                    </Button>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {sermon.views.toLocaleString()} views
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{sermon.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{sermon.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={sermon.speakerPhoto || "/placeholder.svg"}
                        alt={sermon.preacher}
                        className="w-12 h-12 rounded-full object-cover border-2 border-orange-200"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{sermon.preacher}</p>
                        <p className="text-xs text-muted-foreground line-clamp-1">{sermon.speakerBio}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {sermon.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(sermon.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                    </div>

                    <div className="pt-2">
                      <p className="text-xs text-muted-foreground mb-2">Share this sermon:</p>
                      <SocialShareButtons title={sermon.title} />
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-orange-600 hover:bg-orange-700"
                        onClick={() => window.open(sermon.youtubeUrl, "_blank")}
                      >
                        <Play className="h-4 w-4 mr-1" />
                        Watch
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 bg-transparent"
                        onClick={() => {
                          const link = document.createElement("a")
                          link.href = sermon.audioUrl
                          link.download = `${sermon.title}.mp3`
                          link.click()
                        }}
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Audio
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
