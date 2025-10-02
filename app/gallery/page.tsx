"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Download, Eye, Calendar } from "lucide-react"

import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Gallery',
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedMedia, setSelectedMedia] = useState<any>(null)

  const galleryItems = [
    {
      id: 1,
      title: "Sabbath Worship Service",
      date: "2024-01-13",
      category: "worship",
      type: "photo",
      thumbnail: "/gallery-worship-1.png",
      fullImage: "/gallery-worship-1-full.png",
      description: "Our congregation gathered for inspiring Sabbath worship with beautiful music and fellowship.",
    },
    {
      id: 2,
      title: "Youth Revival Weekend",
      date: "2024-01-06",
      category: "youth",
      type: "video",
      thumbnail: "/gallery-youth-revival.png",
      videoUrl: "/videos/youth-revival-highlights.mp4",
      description: "Highlights from our powerful youth revival weekend with dynamic worship and testimonies.",
    },
    {
      id: 3,
      title: "Community Health Fair",
      date: "2023-12-16",
      category: "outreach",
      type: "photo",
      thumbnail: "/gallery-health-fair.png",
      fullImage: "/gallery-health-fair-full.png",
      description: "Serving our community with free health screenings and wellness education.",
    },
    {
      id: 4,
      title: "Children's Christmas Program",
      date: "2023-12-23",
      category: "special",
      type: "photo",
      thumbnail: "/gallery-christmas-program.png",
      fullImage: "/gallery-christmas-program-full.png",
      description: "Our children presenting the beautiful Christmas story with songs and drama.",
    },
    {
      id: 5,
      title: "Baptism Service",
      date: "2023-12-09",
      category: "worship",
      type: "video",
      thumbnail: "/gallery-baptism.png",
      videoUrl: "/videos/baptism-service.mp4",
      description: "Celebrating new members joining our church family through baptism.",
    },
    {
      id: 6,
      title: "Women's Ministry Retreat",
      date: "2023-11-25",
      category: "special",
      type: "photo",
      thumbnail: "/gallery-womens-retreat.png",
      fullImage: "/gallery-womens-retreat-full.png",
      description: "Sisters in faith enjoying fellowship and spiritual growth at our annual retreat.",
    },
    {
      id: 7,
      title: "Pathfinder Camping Trip",
      date: "2023-11-18",
      category: "youth",
      type: "photo",
      thumbnail: "/gallery-pathfinder-camp.png",
      fullImage: "/gallery-pathfinder-camp-full.png",
      description: "Pathfinders learning outdoor skills and building character in God's creation.",
    },
    {
      id: 8,
      title: "Community Food Distribution",
      date: "2023-11-11",
      category: "outreach",
      type: "photo",
      thumbnail: "/gallery-food-distribution.png",
      fullImage: "/gallery-food-distribution-full.png",
      description: "Sharing God's love through practical assistance to families in need.",
    },
    {
      id: 9,
      title: "Choir Performance",
      date: "2023-11-04",
      category: "worship",
      type: "video",
      thumbnail: "/gallery-choir-performance.png",
      videoUrl: "/videos/choir-performance.mp4",
      description: "Our church choir lifting hearts and voices in praise to God.",
    },
    {
      id: 10,
      title: "Evangelistic Series",
      date: "2023-10-28",
      category: "special",
      type: "photo",
      thumbnail: "/gallery-evangelistic-series.png",
      fullImage: "/gallery-evangelistic-series-full.png",
      description: "Community members gathering to hear messages of hope and prophecy.",
    },
    {
      id: 11,
      title: "Youth Talent Show",
      date: "2023-10-21",
      category: "youth",
      type: "video",
      thumbnail: "/gallery-talent-show.png",
      videoUrl: "/videos/youth-talent-show.mp4",
      description: "Young people showcasing their God-given talents in music, drama, and poetry.",
    },
    {
      id: 12,
      title: "Medical Clinic Outreach",
      date: "2023-10-14",
      category: "outreach",
      type: "photo",
      thumbnail: "/gallery-medical-clinic.png",
      fullImage: "/gallery-medical-clinic-full.png",
      description: "Healthcare professionals volunteering to serve our community's medical needs.",
    },
  ]

  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  const getCategoryName = (category: string) => {
    switch (category) {
      case "worship":
        return "Worship"
      case "youth":
        return "Youth"
      case "outreach":
        return "Outreach"
      case "special":
        return "Special Events"
      default:
        return "All Media"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "worship":
        return "bg-blue-100 text-blue-800"
      case "youth":
        return "bg-green-100 text-green-800"
      case "outreach":
        return "bg-purple-100 text-purple-800"
      case "special":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="lg:pr-[14.28%]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-[#36747D] to-[#2a5a61] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl opacity-90">
            Capturing moments of worship, fellowship, and service in our church community
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <h2 className="text-3xl font-bold mb-4 md:mb-0">Photo & Video Gallery</h2>
              <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-5">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="worship">Worship</TabsTrigger>
                <TabsTrigger value="youth">Youth</TabsTrigger>
                <TabsTrigger value="outreach">Outreach</TabsTrigger>
                <TabsTrigger value="special">Special</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={selectedCategory}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <Card
                    key={item.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedMedia(item)}
                  >
                    <div className="relative">
                      <img
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        {item.type === "video" ? (
                          <Play className="h-12 w-12 text-white" />
                        ) : (
                          <Eye className="h-12 w-12 text-white" />
                        )}
                      </div>
                      <div className="absolute top-3 left-3">
                        <Badge className={getCategoryColor(item.category)}>{getCategoryName(item.category)}</Badge>
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary" className="bg-black/50 text-white">
                          {item.type === "video" ? "Video" : "Photo"}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {formatDate(item.date)}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Media Modal/Lightbox would go here in a real implementation */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{selectedMedia.title}</h3>
                <Button variant="outline" onClick={() => setSelectedMedia(null)}>
                  Close
                </Button>
              </div>

              {selectedMedia.type === "video" ? (
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Play className="h-16 w-16 text-[#36747D] mx-auto mb-4" />
                    <p className="text-muted-foreground">Video player would be embedded here</p>
                  </div>
                </div>
              ) : (
                <img
                  src={selectedMedia.fullImage || selectedMedia.thumbnail}
                  alt={selectedMedia.title}
                  className="w-full rounded-lg mb-4"
                />
              )}

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Badge className={getCategoryColor(selectedMedia.category)}>
                    {getCategoryName(selectedMedia.category)}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {formatDate(selectedMedia.date)}
                  </div>
                </div>
                <p className="text-muted-foreground">{selectedMedia.description}</p>
                <div className="flex gap-3 pt-4">
                  <Button className="bg-[#36747D] hover:bg-[#2a5a61]">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline">Share</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Share Your Moments</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Have photos or videos from church events? We'd love to feature them in our gallery. Share your memories with
            our church family.
          </p>
          <Button size="lg" className="bg-[#36747D] hover:bg-[#2a5a61]">
            Submit Your Photos
          </Button>
        </div>
      </section>
    </div>
  )
}
