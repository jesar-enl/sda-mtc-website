import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Play } from "lucide-react"
import { SabbathCountdown } from "@/components/sabbath-countdown"
import { NewsletterSignup } from "@/components/newsletter-signup"

export default function HomePage() {
  return (
    <div className="lg:pr-[14.28%]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
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
            className="bg-[#36747D] hover:bg-[#2a5a61] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Join Us This Sabbath
          </Button>
        </div>
      </section>

      {/* Sabbath Countdown Section */}
      <section className="py-8 px-4 bg-background">
        <div className="max-w-2xl mx-auto">
          <SabbathCountdown />
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground text-lg">Join us for worship, fellowship, and spiritual growth</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sabbath Worship */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
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
                    <span>Saturdays, 09:00 AM - 06:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Main Sanctuary</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Youth Meeting */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
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
            <Card className="hover:shadow-lg transition-shadow duration-300">
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Sermon</h2>
            <p className="text-muted-foreground text-lg">Watch our latest message and be blessed</p>
          </div>

          <Card className="overflow-hidden">
            <div className="relative aspect-video bg-gray-900">
              {/* Video Placeholder */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/pastor-preaching.png')",
                }}
              >
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 rounded-full p-6"
                  >
                    <Play className="h-8 w-8 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-[#36747D] text-white">Latest Sermon</Badge>
                <span className="text-sm text-muted-foreground">December 21, 2024</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">The Promise of His Coming</h3>
              <p className="text-muted-foreground mb-4">
                Pastor John Mukasa explores the blessed hope of Christ's second coming and how it transforms our daily
                lives. Discover the joy and peace that comes from living with eternal perspective.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Pastor John Mukasa</span>
                <span className="text-sm text-muted-foreground">45 minutes</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16 px-4 bg-background">
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
      <section className="py-16 px-4 bg-[#36747D] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Church Family</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the love of Christ and grow in faith with our welcoming community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-[#36747D] hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Plan Your Visit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#36747D] px-8 py-4 text-lg font-semibold bg-transparent transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
