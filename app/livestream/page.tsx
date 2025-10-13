"use client"

import { LivestreamEmbed } from "@/components/livestream-embed"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Radio, MessageCircle, Share2, Bell, Video, PlayCircle, Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PrayerRequestForm } from "@/components/prayer-request-form"
import { Badge } from "@/components/ui/badge"

export default function LivestreamPage() {
  const recentSermons = [
    {
      id: "Aog89ZEheCg",
      title: "Mega Camp meeting 2025 Day 7 - Evening session",
      date: "September 12, 2025",
      speaker: "Pr. Joseph Ssembuusi",
      thumbnail:
        "https://i9.ytimg.com/vi/Aog89ZEheCg/mqdefault.jpg?v=68c42c78&sqp=CLy67sYG&rs=AOn4CLB6v_Vt8xXXCsrIKRNywnwtzQKN4A",
      highlight:
        "A powerful message on preparing for Christ's return through daily surrender and faithful stewardship of God's gifts.",
      bio: "Pr. Joseph Ssembuusi is a passionate evangelist with over 15 years of ministry experience across East Africa.",
    },
    {
      id: "UJqAXOxj_Rg",
      title: "Mega Camp meeting 2025 Day 7 - Morning session",
      date: "September 12, 2025",
      speaker: "Pr. Kulumba",
      thumbnail:
        "https://i9.ytimg.com/vi/UJqAXOxj_Rg/mqdefault.jpg?v=68c3d96f&sqp=CLy67sYG&rs=AOn4CLAWw3arKVVfR5SiS1gVEbl5wU0BcQ",
      highlight:
        "An inspiring exploration of God's grace and how it transforms our daily walk with Christ through practical faith.",
      bio: "Pr. Kulumba serves as a district pastor and is known for his deep biblical insights and practical teaching style.",
    },
    {
      id: "9bZkp7q19f0",
      title: "Mega Camp meeting 2025 Day 6 - Evening session",
      date: "September 11, 2025",
      speaker: "Pr. Joseph Ssembuusi",
      thumbnail:
        "https://i9.ytimg.com/vi/NWL80WdNFb8/mqdefault.jpg?v=68c2d9f2&sqp=CLy67sYG&rs=AOn4CLDAychsAjQgJapnNEKcCKfGa75heg",
      highlight:
        "A compelling call to authentic Christian living and the importance of community in our spiritual journey.",
      bio: "With a heart for youth ministry, Pr. Ssembuusi connects biblical truth with contemporary life challenges.",
    },
  ]

  const testimonies = [
    {
      name: "Grace Akinyi",
      text: "Watching the livestream from abroad keeps me connected to my church family. The messages are always timely and encouraging.",
      location: "Nairobi, Kenya",
    },
    {
      name: "David Ochieng",
      text: "As a student, the online services help me stay spiritually grounded even when I can't attend in person. Truly a blessing!",
      location: "Kampala, Uganda",
    },
  ]

  return (
    <div className="lg:pr-[14.28%]">
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/congregation-worship.jpg"
            alt="Congregation worshiping together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-red-700/80" />
        </div>
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Radio className="h-12 w-12 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">Worship With Us From Anywhere</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Join our live Sabbath services and experience the joy of worship together
            </p>
            <Button size="lg" className="bg-white text-red-600 hover:bg-white/90 text-lg px-8 py-6">
              <PlayCircle className="mr-2 h-6 w-6" />
              Watch Live Now
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-[#2D5A87] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg opacity-90">
            To make disciples of Jesus Christ who live as His loving witnesses and proclaim to all people the
            everlasting gospel in preparation for His soon return.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <LivestreamEmbed
            youtubeVideoId="jfKfPfyJRdk"
            archivedVideoId="uaqiuhBHn7A"
            title="Live Sabbath Worship Service"
            description="Experience worship with Seventh-day Adventist Church Masaka Town from anywhere in the world"
            scheduledTime="Every Saturday at 8:30 AM EAT"
          />
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Service Schedule</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-[#2D5A87] mb-2" />
                <CardTitle>Sabbath School</CardTitle>
                <CardDescription>Every Saturday</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-[#2D5A87]">9:30 AM</p>
                <p className="text-sm text-muted-foreground mt-2">Interactive Bible study for all ages</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#2D5A87]">
              <CardHeader>
                <Radio className="h-8 w-8 text-[#2D5A87] mb-2 animate-pulse" />
                <CardTitle>Divine Service</CardTitle>
                <CardDescription>Every Saturday - LIVE</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-[#2D5A87]">11:00 AM</p>
                <p className="text-sm text-muted-foreground mt-2">Main worship service with sermon</p>
                <Badge className="mt-2 bg-red-600">Streaming Live</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Calendar className="h-8 w-8 text-[#2D5A87] mb-2" />
                <CardTitle>AY Service</CardTitle>
                <CardDescription>Every Saturday</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-[#2D5A87]">4:00 PM</p>
                <p className="text-sm text-muted-foreground mt-2">Youth-led worship and fellowship</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Recent Sermons</h2>
            <p className="text-muted-foreground">Catch up on messages you may have missed from our recent services</p>
          </div>

          <div className="space-y-6">
            {recentSermons.map((sermon) => (
              <Card key={sermon.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-[300px_1fr] gap-6">
                  <div className="relative aspect-video md:aspect-auto bg-muted group cursor-pointer">
                    <img
                      src={sermon.thumbnail || "/placeholder.svg"}
                      alt={sermon.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                      <PlayCircle className="h-16 w-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    </div>
                  </div>

                  <CardContent className="p-6 space-y-3">
                    <div>
                      <h3 className="font-bold text-xl mb-2">{sermon.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{sermon.speaker}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{sermon.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-[#2D5A87]">Sermon Highlight:</p>
                      <p className="text-sm text-muted-foreground">{sermon.highlight}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-[#2D5A87]">About the Speaker:</p>
                      <p className="text-sm text-muted-foreground">{sermon.bio}</p>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full mt-4 bg-transparent"
                      onClick={() => window.open(`https://www.youtube.com/watch?v=${sermon.id}`, "_blank")}
                    >
                      <Video className="h-4 w-4 mr-2" />
                      Watch Full Sermon
                    </Button>
                  </CardContent>
                </div>
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

      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Livestream Testimonies</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonies.map((testimony, index) => (
              <Card key={index} className="border-l-4 border-l-[#2D5A87]">
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4">"{testimony.text}"</p>
                  <div>
                    <p className="font-semibold">{testimony.name}</p>
                    <p className="text-sm text-muted-foreground">{testimony.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Engage With Us Online</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Live Chat</h3>
                      <p className="text-sm text-muted-foreground">Join the conversation during live services</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Interact with other viewers, share prayer requests, and fellowship together in real-time during our
                    livestreams.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Share2 className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Share the Blessing</h3>
                      <p className="text-sm text-muted-foreground">Invite others to worship with us</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Share our livestream with friends and family around the world. Let's spread the gospel together!
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Share on Facebook
                    </Button>
                    <Button size="sm" variant="outline">
                      Share on WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Bell className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Get Notified</h3>
                      <p className="text-sm text-muted-foreground">Never miss a service</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Subscribe to our YouTube channel and turn on notifications to get alerts when we go live.
                  </p>
                  <Button
                    className="w-full"
                    onClick={() =>
                      window.open("https://www.youtube.com/@SDAMasakaTownChurch?sub_confirmation=1", "_blank")
                    }
                  >
                    Subscribe on YouTube
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div>
              <PrayerRequestForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-[#2D5A87] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Worship in Your Language</h3>
          <p className="text-lg opacity-90 mb-4">
            Our services are primarily in English, welcoming our diverse international community.
          </p>
          <p className="text-sm opacity-75">
            For services in other languages, please contact us or visit our sister congregations in the region.
          </p>
        </div>
      </section>
    </div>
  )
}
