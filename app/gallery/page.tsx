"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Download, Eye, Calendar, Heart, ChevronLeft, ChevronRight } from "lucide-react"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedMedia, setSelectedMedia] = useState<any>(null)
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0)

  const bannerImages = [
    {
      image: "/gallery-banner-1.jpg",
      caption: "Joyful worship every Sabbath",
      date: "Every Saturday",
    },
    {
      image: "/gallery-banner-2.jpg",
      caption: "Celebrating new life through baptism",
      date: "Monthly",
    },
    {
      image: "/gallery-banner-3.jpg",
      caption: "Children learning God's love",
      date: "Weekly Programs",
    },
  ]

  const spiritualVerses = [
    {
      verse: "For where two or three gather in my name, there am I with them.",
      reference: "Matthew 18:20",
    },
    {
      verse: "Let us not giving up meeting together, as some are in the habit of doing, but encouraging one another.",
      reference: "Hebrews 10:25",
    },
  ]

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

  const outreachItems = galleryItems.filter((item) => item.category === "outreach")

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % bannerImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextBanner = () => {
    setCurrentBannerIndex((prev) => (prev + 1) % bannerImages.length)
  }

  const prevBanner = () => {
    setCurrentBannerIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length)
  }

  return (
    <div className="lg:pr-[14.28%]">
      <section className="relative h-[500px] overflow-hidden">
        {bannerImages.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBannerIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${banner.image})`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-orange-900/70" />
            <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center animate-fade-in">Moments That Matter</h1>
              <p className="text-2xl md:text-3xl mb-2 text-center">{banner.caption}</p>
              <p className="text-lg opacity-90">{banner.date}</p>
              <div className="mt-8">
                <Heart className="h-12 w-12 animate-pulse" />
              </div>
            </div>
          </div>
        ))}

        {/* Banner navigation */}
        <button
          onClick={prevBanner}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextBanner}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Banner indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBannerIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentBannerIndex ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Recent Highlights</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {galleryItems.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-80 snap-center group cursor-pointer"
                onClick={() => setSelectedMedia(item)}
              >
                <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                  <img
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{formatDate(item.date)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
                {filteredItems.map((item, index) => (
                  <>
                    <Card
                      key={item.id}
                      className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                      onClick={() => setSelectedMedia(item)}
                    >
                      <div className="relative">
                        <img
                          src={item.thumbnail || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
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

                    {(index + 1) % 6 === 0 && index < filteredItems.length - 1 && (
                      <div className="md:col-span-2 lg:col-span-3 my-8">
                        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 border-amber-200">
                          <CardContent className="p-8 text-center">
                            <p className="text-2xl font-serif italic mb-2 text-amber-900 dark:text-amber-100">
                              "{spiritualVerses[Math.floor(index / 6) % spiritualVerses.length].verse}"
                            </p>
                            <p className="text-sm text-amber-700 dark:text-amber-300">
                              - {spiritualVerses[Math.floor(index / 6) % spiritualVerses.length].reference}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    )}
                  </>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Compassion in Action</h2>
            <p className="text-lg text-muted-foreground">Sharing God's love through service and community impact</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outreachItems.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                onClick={() => setSelectedMedia(item)}
              >
                <div className="relative">
                  <img
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <Badge className="mb-2 bg-purple-500">Community Impact</Badge>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {formatDate(item.date)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">A Personal Invitation</h2>
            <p className="text-lg text-muted-foreground">Hear from our church family about what makes MTC special</p>
          </div>

          <Card className="overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
              <div className="text-center p-8">
                <Play className="h-20 w-20 text-amber-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Welcome to Our Family</h3>
                <p className="text-muted-foreground mb-4">
                  A heartfelt 90-second invitation from Pastor Ian and our church team
                </p>
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Video
                </Button>
              </div>
            </div>
          </Card>
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
