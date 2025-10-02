"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Download, Calendar, User, Clock } from "lucide-react"


export default function SermonsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const sermons = [
    {
      id: 1,
      title: "Walking by Faith, Not by Sight",
      preacher: "Pastor John Mukasa",
      date: "2024-01-13",
      duration: "45 min",
      category: "sabbath-worship",
      description: "An inspiring message about trusting God's plan even when we cannot see the way forward.",
      videoUrl: "/sermon-video-1.mp4",
      audioUrl: "/sermon-audio-1.mp3",
      thumbnail: "/sermon-thumb-1.png",
    },
    {
      id: 2,
      title: "The Power of Prayer in Youth",
      preacher: "Pastor Sarah Nambi",
      date: "2024-01-06",
      duration: "35 min",
      category: "youth-services",
      description: "Discovering how young people can develop a meaningful prayer life and connect with God.",
      videoUrl: "/sermon-video-2.mp4",
      audioUrl: "/sermon-audio-2.mp3",
      thumbnail: "/sermon-thumb-2.png",
    },
    {
      id: 3,
      title: "The Three Angels' Messages Today",
      preacher: "Pastor John Mukasa",
      date: "2023-12-30",
      duration: "52 min",
      category: "evangelistic",
      description: "Understanding the relevance of Revelation 14 in our modern world and end-time preparation.",
      videoUrl: "/sermon-video-3.mp4",
      audioUrl: "/sermon-audio-3.mp3",
      thumbnail: "/sermon-thumb-3.png",
    },
    {
      id: 4,
      title: "Sabbath: A Gift of Rest",
      preacher: "Elder David Ssemakula",
      date: "2023-12-23",
      duration: "38 min",
      category: "sabbath-worship",
      description: "Exploring the beauty and blessing of the Sabbath as God's gift to humanity.",
      videoUrl: "/sermon-video-4.mp4",
      audioUrl: "/sermon-audio-4.mp3",
      thumbnail: "/sermon-thumb-4.png",
    },
    {
      id: 5,
      title: "Reaching the Lost in Our Community",
      preacher: "Pastor Sarah Nambi",
      date: "2023-12-16",
      duration: "41 min",
      category: "evangelistic",
      description: "Practical ways to share God's love and the gospel message with our neighbors and friends.",
      videoUrl: "/sermon-video-5.mp4",
      audioUrl: "/sermon-audio-5.mp3",
      thumbnail: "/sermon-thumb-5.png",
    },
    {
      id: 6,
      title: "Building Character Like Christ",
      preacher: "Pastor John Mukasa",
      date: "2023-12-09",
      duration: "47 min",
      category: "youth-services",
      description: "How young people can develop Christ-like character in a challenging world.",
      videoUrl: "/sermon-video-6.mp4",
      audioUrl: "/sermon-audio-6.mp3",
      thumbnail: "/sermon-thumb-6.png",
    },
  ]

  const filteredSermons =
    selectedCategory === "all" ? sermons : sermons.filter((sermon) => sermon.category === selectedCategory)

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
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-orange-600  to-orange-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sermons</h1>
          <p className="text-xl opacity-90">
            Listen to inspiring messages that strengthen faith and encourage spiritual growth
          </p>
        </div>
      </section>

      {/* Sermon Categories & Archive */}
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
                  <Card key={sermon.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                    </div>

                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-2">{sermon.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{sermon.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {sermon.preacher}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {sermon.duration}
                          </div>
                        </div>

                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {new Date(sermon.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>

                        <div className="flex gap-2 pt-2">
                          <Button size="sm" className="flex-1 bg-orange-600 hover:bg-orange-800">
                            <Play className="h-4 w-4 mr-1" />
                            Watch
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                            <Download className="h-4 w-4 mr-1" />
                            Audio
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Sermon */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Featured Sermon</h2>
            <p className="text-muted-foreground">This week's highlighted message</p>
          </div>

          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img src="/featured-sermon.png" alt="Featured Sermon" className="w-full h-64 md:h-full object-cover" />
              </div>
              <div className="md:w-1/2 p-6">
                <Badge className="bg-orange-700 text-white mb-3">Featured</Badge>
                <h3 className="text-2xl font-bold mb-3">Walking by Faith, Not by Sight</h3>
                <p className="text-muted-foreground mb-4">
                  Pastor John Mukasa delivers a powerful message about trusting God's plan even when we cannot see the
                  way forward. Drawing from 2 Corinthians 5:7, this sermon encourages believers to step out in faith and
                  trust in God's perfect timing.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    Pastor John Mukasa
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    45 min
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Jan 13, 2024
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button className="bg-orange-600 hover:bg-orange-700">
                    <Play className="h-4 w-4 mr-2" />
                    Watch Now
                  </Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download Audio
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
