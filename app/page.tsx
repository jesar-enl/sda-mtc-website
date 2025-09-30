import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Play, Radio } from "lucide-react"
import { SabbathCountdown } from "@/components/sabbath-countdown"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { LivestreamEmbed } from "@/components/livestream-embed"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="lg:pr-[14.28%]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden fade-in">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/modern-welcoming-church.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Masaka Town
            <br />
            <span className="text-4xl md:text-6xl">Seventh-day Adventist Church</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-medium opacity-90">
            A Family of Faith, Preparing for Christ's Soon Return
          </p>
          <Button
            size="lg"
            className="bg-[#36747D] hover:bg-[#2a5a61] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 glow-effect bounce-subtle"
          >
            Join Us This Sabbath
          </Button>
        </div>
      </section>

      {/* Sabbath Countdown Section */}
      <section className="py-8 px-4 bg-background zoom-in">
        <div className="max-w-2xl mx-auto">
          <SabbathCountdown />
        </div>
      </section>

      {/* Livestream Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Radio className="h-8 w-8 text-red-600 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold">Watch Live</h2>
            </div>
            <p className="text-muted-foreground text-lg">Join our Sabbath worship service from anywhere in the world</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <LivestreamEmbed
              youtubeVideoId="uaqiuhBHn7A"
              title="Live Sabbath Worship Service"
              description="Experience worship with us online every Saturday"
              scheduledTime="Every Saturday at 8:30 AM EAT"
            />

            <div className="text-center mt-8">
              <Link href="/livestream">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  <Radio className="h-5 w-5 mr-2" />
                  Go to Full Livestream Page
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground text-lg">Join us for worship, fellowship, and spiritual growth</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sabbath Worship */}
            <Card className="hover:shadow-lg transition-all duration-300 card-hover stagger-item">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-[#36747D] text-white">Weekly</Badge>
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardTitle className="text-xl">Sabbath Worship Service</CardTitle>
                <CardDescription>Join us for our weekly worship and fellowship</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Saturdays, 08:30 AM - 06:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Main Sanctuary</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Youth Meeting */}
            <Card className="hover:shadow-lg transition-all duration-300 card-hover stagger-item">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">This Friday</Badge>
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardTitle className="text-xl">Youth Fellowship</CardTitle>
                <CardDescription>Dynamic worship and Bible study for young people</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Friday, 6:00 PM - 8:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Youth Hall</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Community Outreach */}
            <Card className="hover:shadow-lg transition-all duration-300 card-hover stagger-item">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-[#36747D] text-[#36747D]">
                    Special Event
                  </Badge>
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardTitle className="text-xl">Community Health Fair</CardTitle>
                <CardDescription>Free health screenings and wellness education</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Sunday, 10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Church Grounds</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Sermon Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Sermon</h2>
            <p className="text-muted-foreground text-lg">Watch our latest message and be blessed</p>
          </div>

          <Card className="overflow-hidden rotate-in image-zoom">
            <div className="relative aspect-video bg-gray-900">
              {/* Video Placeholder */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://i9.ytimg.com/vi/uaqiuhBHn7A/mqdefault.jpg?v=68c513af&sqp=CJS_7sYG&rs=AOn4CLAkYFsnpf-d6GA9QmKJw29lGvu96w')",
                }}
              >
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 rounded-full p-6 pulse-gentle"
                  >
                    <Play className="h-8 w-8 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-[#36747D] text-white">Latest Sermon</Badge>
                <span className="text-sm text-muted-foreground">September 13, 2025</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">I will go; make disciples of Jesus</h3>
              <p className="text-muted-foreground mb-4">
                Pr. Wasswa Joshua crowns the Mega Camp meeting 2025 calling upon all of us to be ready to "go into all nations and make disciples of Jesus Christ" as Matt. 20:18-20 instructs us.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Pr. Wasswa Joshua</span>
                <span className="text-sm text-muted-foreground">45 minutes</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16 px-4 bg-background slide-in-right">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Connected</h2>
            <p className="text-muted-foreground text-lg">
              Join our church family and never miss important updates, events, and spiritual encouragement
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="py-16 px-4 bg-[#36747D] text-white gradient-animate"
        style={{
          background: "linear-gradient(135deg, #36747D 0%, #2a5a61 50%, #36747D 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 fade-in">Join Our Church Family</h2>
          <p className="text-xl mb-8 opacity-90 fade-in">
            Experience the love of Christ and grow in faith with our welcoming community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-[#36747D] hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 stagger-item"
            >
              Plan Your Visit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#36747D] px-8 py-4 text-lg font-semibold bg-transparent transition-all duration-300 transform hover:scale-105 stagger-item"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
