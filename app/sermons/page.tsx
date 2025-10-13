"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Download, Calendar, Clock, Search, TrendingUp, BookOpen } from "lucide-react"
import { SocialShareButtons } from "@/components/social-share-buttons"
import { SermonReflectionForm } from "@/components/sermon-reflection-form"
import Link from "next/link"
import { sermonsData, seriesData } from "@/lib/sermons-data"

export default function SermonsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSermon, setSelectedSermon] = useState<number | null>(null)

  const sermons = Object.values(sermonsData)

  // Filter sermons by category and search query
  const filteredSermons = sermons.filter((sermon) => {
    const matchesCategory = selectedCategory === "all" || sermon.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.preacher.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const mostWatched = [...sermons].sort((a, b) => b.views - a.views).slice(0, 3)

  const seriesList = Object.values(seriesData)

  const getCategoryName = (category: string) => {
    switch (category) {
      case "sabbath-worship":
        return "Sabbath Worship"
      case "youth-services":
        return "Youth Services"
      case "evangelistic":
        return "Evangelistic Meetings"
      default:
        return "All Sermons"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "sabbath-worship":
        return "bg-blue-100 text-blue-800"
      case "youth-services":
        return "bg-green-100 text-green-800"
      case "evangelistic":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="lg:pr-[14.28%]">
      <section
        className="relative py-24 px-4 bg-cover bg-center text-white"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/open-bible-hero.jpg')",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <BookOpen className="h-16 w-16 mx-auto mb-4 opacity-90" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Sermons</h1>
          <p className="text-2xl md:text-3xl mb-6 font-light italic">"For the word of God is living and active..."</p>
          <p className="text-lg opacity-90 mb-4">Hebrews 4:12</p>
          <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg max-w-2xl mx-auto">
            <p className="text-lg leading-relaxed">
              Welcome to our sermon archive! Our media team is dedicated to bringing you inspiring messages that
              strengthen faith and encourage spiritual growth. Whether you're catching up on a missed service or
              revisiting a favorite message, we pray these sermons bless you.
            </p>
            <p className="text-sm mt-4 opacity-90">- Media Ministry Team</p>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search sermons by title, speaker, or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="md:w-auto bg-transparent">
              <Search className="h-4 w-4 mr-2" />
              Advanced Filters
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="h-8 w-8 text-orange-600" />
            <h2 className="text-3xl font-bold">Most Watched Sermons</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {mostWatched.map((sermon, index) => (
              <Card key={sermon.id} className="overflow-hidden hover:shadow-xl transition-all">
                <div className="relative">
                  <img
                    src={sermon.thumbnail || "/placeholder.svg"}
                    alt={sermon.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-3 left-3 bg-orange-600 text-white">#{index + 1} Most Watched</Badge>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {sermon.views.toLocaleString()} views
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{sermon.title}</CardTitle>
                  <div className="flex items-center gap-2 mt-2">
                    <img
                      src={sermon.speakerPhoto || "/placeholder.svg"}
                      alt={sermon.preacher}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm text-muted-foreground">{sermon.preacher}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    onClick={() => window.open(sermon.youtubeUrl, "_blank")}
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Watch Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Sermon Series</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {seriesList.map((series) => (
              <Link key={series.slug} href={`/sermons/series/${series.slug}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <div className="relative h-32 bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white text-center px-4">{series.name}</h3>
                  </div>
                  <CardContent className="pt-4">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{series.description}</p>
                    <p className="text-sm text-muted-foreground mb-2">{series.sermons.length} sermons in this series</p>
                    <Button variant="outline" className="w-full bg-transparent">
                      View Series
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sermon Archive with enhanced cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <h2 className="text-3xl font-bold mb-4 md:mb-0">Sermon Archive</h2>
              <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="all">All Sermons</TabsTrigger>
                <TabsTrigger value="sabbath-worship">Sabbath</TabsTrigger>
                <TabsTrigger value="youth-services">Youth</TabsTrigger>
                <TabsTrigger value="evangelistic">Evangelistic</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={selectedCategory} className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSermons.map((sermon) => (
                  <Card key={sermon.id} className="overflow-hidden hover:shadow-xl transition-all">
                    <div className="relative">
                      <img
                        src={sermon.thumbnail || "/placeholder.svg"}
                        alt={sermon.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                          <Play className="h-5 w-5 mr-2" />
                          Play Sermon
                        </Button>
                      </div>
                      <Badge className={`absolute top-3 right-3 ${getCategoryColor(sermon.category)}`}>
                        {getCategoryName(sermon.category)}
                      </Badge>
                      <Badge className="absolute top-3 left-3 bg-orange-600 text-white">{sermon.series}</Badge>
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
                          <div className="flex items-center gap-1">
                            <TrendingUp className="h-4 w-4" />
                            {sermon.views}
                          </div>
                        </div>

                        <div className="text-sm">
                          <span className="text-muted-foreground">Related to: </span>
                          <Link href={`/ministries/${sermon.ministrySlug}`} className="text-orange-600 hover:underline">
                            {sermon.ministry}
                          </Link>
                        </div>

                        <div className="pt-2">
                          <p className="text-xs text-muted-foreground mb-2">Share this sermon:</p>
                          <SocialShareButtons title={sermon.title} />
                        </div>

                        <div className="flex gap-2 pt-2">
                          <Button
                            size="sm"
                            className="flex-1 bg-orange-600 hover:bg-orange-700"
                            onClick={() => {
                              window.open(sermon.youtubeUrl, "_blank")
                              setSelectedSermon(sermon.id)
                            }}
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

              {selectedSermon && (
                <div className="mt-12">
                  <SermonReflectionForm
                    sermonTitle={sermons.find((s) => s.id === selectedSermon)?.title || ""}
                    sermonId={selectedSermon}
                  />
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
