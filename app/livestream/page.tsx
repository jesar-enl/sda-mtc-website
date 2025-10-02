"use client"

import { LivestreamEmbed } from "@/components/livestream-embed"
import { Card, CardContent } from "@/components/ui/card"
import { Radio, MessageCircle, Share2, Bell, Video, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LivestreamPage() {
  const recentSermons = [
    {
      id: "Aog89ZEheCg",
      title: "Mega Camp meeting 2025 Day 7 - Evening session",
      date: "September 12, 2025",
      speaker: "Pr. Joesph Ssembuusi",
      thumbnail: "https://i9.ytimg.com/vi/Aog89ZEheCg/mqdefault.jpg?v=68c42c78&sqp=CLy67sYG&rs=AOn4CLB6v_Vt8xXXCsrIKRNywnwtzQKN4A",
    },
    {
      id: "UJqAXOxj_Rg",
      title: "Mega Camp meeting 2025 Day 7 - Morning session",
      date: "September 12, 2025",
      speaker: "Pr. Kulumba",
      thumbnail: "https://i9.ytimg.com/vi/UJqAXOxj_Rg/mqdefault.jpg?v=68c3d96f&sqp=CLy67sYG&rs=AOn4CLAWw3arKVVfR5SiS1gVEbl5wU0BcQ",
    },
    {
      id: "9bZkp7q19f0",
      title: "Mega Camp meeting 2025 Day 6 - Evening session",
      date: "September 11, 2025",
      speaker: "Pr. Joseph Ssembuusi",
      thumbnail: "https://i9.ytimg.com/vi/NWL80WdNFb8/mqdefault.jpg?v=68c2d9f2&sqp=CLy67sYG&rs=AOn4CLDAychsAjQgJapnNEKcCKfGa75heg",
    },
  ]

  return (
    <div className="lg:pr-[14.28%]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Radio className="h-12 w-12 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold">Live Worship</h1>
          </div>
          <p className="text-xl opacity-90">Join us online for our Sabbath worship services and special events</p>
        </div>
      </section>

      {/* Main Livestream Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <LivestreamEmbed
            youtubeVideoId="jfKfPfyJRdk"
            archivedVideoId="uaqiuhBHn7A"
            title="Live Sabbath Worship Service"
            description="Experience worship with Masaka Town SDA Church from anywhere in the world"
            scheduledTime="Every Saturday at 8:30 AM EAT"
          />
        </div>
      </section>

      {/* Engagement Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Engage With Us Online</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg">Live Chat</h3>
                <p className="text-sm text-muted-foreground">
                  Interact with other viewers and share your thoughts during the service
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Share2 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg">Share</h3>
                <p className="text-sm text-muted-foreground">Invite friends and family to join the service online</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Bell className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg">Get Notified</h3>
                <p className="text-sm text-muted-foreground">
                  Subscribe to our YouTube channel to get alerts when we go live
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    window.open("https://www.youtube.com/@SDAMasakaTownChurch?sub_confirmation=1", "_blank")
                  }
                >
                  Subscribe Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Sermons Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Recent Sermons</h2>
            <p className="text-muted-foreground">Catch up on messages you may have missed from our recent services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {recentSermons.map((sermon) => (
              <Card key={sermon.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-video bg-muted group cursor-pointer">
                  <img
                    src={sermon.thumbnail || "/placeholder.svg"}
                    alt={sermon.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                    <PlayCircle className="h-16 w-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  </div>
                </div>
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-semibold text-lg line-clamp-2">{sermon.title}</h3>
                  <p className="text-sm text-muted-foreground">{sermon.speaker}</p>
                  <p className="text-xs text-muted-foreground">{sermon.date}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-2 bg-transparent"
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${sermon.id}`, "_blank")}
                  >
                    <Video className="h-4 w-4 mr-2" />
                    Watch Sermon
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://www.youtube.com/@SDAMasakaTownChurch/streams", "_blank")}
            >
              View All Sermons
            </Button>
          </div>
        </div>
      </section>

      {/* Past Services */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Missed a Service?</h2>
          <p className="text-muted-foreground mb-8">
            All our services are recorded and available to watch anytime on our YouTube channel
          </p>
          <Button
            size="lg"
            className="bg-[#36747D] hover:bg-[#2a5a61]"
            onClick={() => window.open("https://www.youtube.com/@SDAMasakaTownChurch/streams", "_blank")}
          >
            View Past Services
          </Button>
        </div>
      </section>
    </div>
  )
}
