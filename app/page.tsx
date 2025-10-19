import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Play, Radio, Heart, Users, Sparkles } from "lucide-react"
import { SabbathCountdown } from "@/components/sabbath-countdown"
import { LivestreamEmbed } from "@/components/livestream-embed"
import { VisitorGuide } from "@/components/visitor-guide"
import { ChurchMap } from "@/components/church-map"
import { EventCountdown } from "@/components/event-countdown"
import { Testimonials } from "@/components/testimonials"
import { DevotionalPreview } from "@/components/devotional-preview"
import { SubscriptionPreferences } from "@/components/subscription-preferences"
import { RSVPModal } from "@/components/rsvp-modal"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home - Seventh-day Adventist Church Masaka Town",
  description:
    "Welcome to Seventh-day Adventist Church Masaka Town. Join our vibrant community for Sabbath worship, fellowship, and spiritual growth. Services every Saturday at 8:30 AM. Everyone is welcome!",
  keywords: [
    "SDA Masaka",
    "Seventh-day Adventist Masaka Town",
    "Church in Masaka",
    "Sabbath worship Masaka",
    "Christian church Uganda",
    "Bible study Masaka",
    "Youth ministry Masaka",
    "Community church",
  ],
  openGraph: {
    title: "Seventh-day Adventist Church Masaka Town - A Family of Faith",
    description:
      "Join our vibrant community for Sabbath worship, fellowship, and spiritual growth in Masaka Town, Uganda.",
    images: ["/modern-welcoming-church.png"],
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  const creationSabbathDate = new Date("2025-10-25T08:30:00")

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
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto slide-up">
          <div className="flex items-center justify-center gap-2 mb-3 animate-fade-in">
            <Heart className="h-6 w-6 text-red-400 animate-pulse" />
            <p className="text-lg md:text-xl font-medium tracking-wide">Welcome to</p>
            <Heart className="h-6 w-6 text-red-400 animate-pulse" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Seventh-day Adventist Church
            <br />
            <span className="text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              MASAKA TOWN
            </span>
          </h1>
          <p className="text-xl md:text-3xl mb-4 font-semibold opacity-95 text-balance">
            A Family of Faith, Preparing for Christ's Soon Return
          </p>
          <p className="text-base md:text-lg mb-10 opacity-80 max-w-2xl mx-auto text-pretty">
            We love to share a <Heart className="h-6 w-6 text-red-400 animate-pulse" /> for Jesus and a commitment to demonstrating and spreading the Good News for HIs transforming love to our neighboring commuinty, Masaka City, and the world at large. 
            Join our vibrant community of believers as we worship together, grow in faith, and serve with love. All are welcome to worship and fellowship with us.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#visitor-guide">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#36747D] to-[#2a5a61] hover:from-[#2a5a61] hover:to-[#1e4449] text-white px-10 py-6 text-lg md:text-xl font-bold rounded-full shadow-2xl hover:shadow-[#36747D]/50 transition-all duration-300 transform hover:scale-110 glow-effect bounce-subtle w-full sm:w-auto"
              >
                <Users className="h-5 w-5 mr-2" />
                Plan Your Visit
              </Button>
            </Link>
            <Link href="/livestream">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#36747D] px-10 py-6 text-lg md:text-xl font-bold rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-110 w-full sm:w-auto"
              >
                <Radio className="h-5 w-5 mr-2" />
                Watch Live
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 fade-in-up">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-[#36747D]" />
              <h2 className="text-3xl md:text-4xl font-bold">Experience Our Community</h2>
            </div>
            <p className="text-muted-foreground text-lg">Warmth, fellowship, and faith in action</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 stagger-item">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/african-church-worship-service-people-singing.jpg"
                  alt="Worship Service"
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold mb-1">Joyful Worship</h3>
                  <p className="text-white/90 text-sm">Uplifting praise and heartfelt worship every Sabbath</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 stagger-item">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/church-fellowship-meal-community-gathering.jpg"
                  alt="Fellowship"
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold mb-1">Warm Fellowship</h3>
                  <p className="text-white/90 text-sm">Building lasting friendships and supporting one another</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 stagger-item">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/church-community-outreach-helping-people.jpg"
                  alt="Community Events"
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold mb-1">Serving Together</h3>
                  <p className="text-white/90 text-sm">Making a difference in our community through love</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Sabbath Countdown Section */}
      <section className="py-8 px-4 bg-background zoom-in">
        <div className="max-w-2xl mx-auto">
          <SabbathCountdown />
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't Miss This Special Event</h2>
            <p className="text-muted-foreground text-lg">Mark your calendar and join us</p>
          </div>
          <EventCountdown
            eventName="Creation Sabbath"
            eventDate={creationSabbathDate}
            eventDescription="A Sabbath where we reflect on creation through worship. Plan not to miss!"
          />
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

      <section id="visitor-guide" className="py-16 px-4 bg-background scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Planning Your First Visit?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're excited to welcome you! Here's everything you need to know to feel comfortable and prepared for your
              visit.
            </p>
          </div>
          <VisitorGuide />
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
            <p className="text-muted-foreground text-lg">We're located in the heart of Masaka Town</p>
          </div>
          <ChurchMap />
        </div>
      </section>

      {/* Upcoming Events Section with RSVP */}
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
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Saturdays, 08:30 AM - 06:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Main Sanctuary</span>
                  </div>
                </div>
                <Link href="/livestream">
                  <Button className="w-full bg-transparent" variant="outline">
                    Watch Online
                  </Button>
                </Link>
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
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Friday, 6:00 PM - 8:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Youth Hall</span>
                  </div>
                </div>
                <RSVPModal eventName="Youth Fellowship" eventDate="Friday, 6:00 PM - 8:00 PM" />
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
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>March 15, 10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Church Grounds</span>
                  </div>
                </div>
                <RSVPModal eventName="Community Health Fair" eventDate="March 15, 2025 at 10:00 AM" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hear From Our Family</h2>
            <p className="text-muted-foreground text-lg">Real stories from real people in our church community</p>
          </div>
          <Testimonials />
        </div>
      </section>

      <section className="py-16 px-4 bg-background" id="weekly-inspiration">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Weekly Inspiration</h2>
            <p className="text-muted-foreground text-lg">
              Devotionals, messages, and spiritual encouragement for your journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <DevotionalPreview
              title="Walking in Faith: Trusting God's Timing"
              excerpt="In our fast-paced world, waiting on God's timing can be challenging. Discover how patience and faith work together to strengthen our relationship with Christ."
              date="March 8, 2025"
              category="Devotional"
              slug="walking-in-faith"
              image="/person-praying-sunrise-peaceful.jpg"
            />
            <DevotionalPreview
              title="The Power of Community in Faith"
              excerpt="God designed us for fellowship. Learn how being part of a faith community enriches our spiritual lives and helps us grow closer to Jesus."
              date="March 5, 2025"
              category="Blog"
              slug="power-of-community"
              image="/church-community-people-together-fellowship.jpg"
            />
            <DevotionalPreview
              title="Finding Peace in Troubled Times"
              excerpt="When life feels overwhelming, where do we turn? Explore biblical principles for finding God's peace that surpasses all understanding."
              date="March 1, 2025"
              category="Message"
              slug="finding-peace"
              image="/peaceful-nature-calm-water-reflection.jpg"
            />
          </div>

          <div className="text-center mt-8">
            <Link href="/devotionals">
              <Button
                size="lg"
                variant="outline"
                className="border-[#36747D] text-[#36747D] hover:bg-[#36747D] hover:text-white bg-transparent"
              >
                View All Messages
              </Button>
            </Link>
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
                  backgroundImage:
                    "url('https://i9.ytimg.com/vi/uaqiuhBHn7A/mqdefault.jpg?v=68c513af&sqp=CJS_7sYG&rs=AOn4CLAkYFsnpf-d6GA9QmKJw29lGvu96w')",
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
                Pr. Wasswa Joshua crowns the Mega Camp meeting 2025 calling upon all of us to be ready to "go into all
                nations and make disciples of Jesus Christ" as Matt. 20:18-20 instructs us.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Pr. Wasswa Joshua</span>
                <span className="text-sm text-muted-foreground">45 minutes</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-background slide-in-right">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Connected Your Way</h2>
            <p className="text-muted-foreground text-lg">
              Customize your subscription to receive updates that matter most to you
            </p>
          </div>
          <SubscriptionPreferences />
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="py-20 px-4 bg-[#36747D] text-white gradient-animate relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #36747D 0%, #2a5a61 50%, #36747D 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[url('/abstract-geometric-flow.png')] opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in">Join Our Church Family</h2>
          <p className="text-xl md:text-2xl mb-10 opacity-95 text-balance">
            Experience the love of Christ and grow in faith with our welcoming community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-[#36747D] hover:bg-gray-100 px-10 py-6 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl stagger-item w-full sm:w-auto"
              >
                <Users className="h-5 w-5 mr-2" />
                Plan Your Visit
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#36747D] px-10 py-6 text-lg font-bold rounded-full bg-transparent transition-all duration-300 transform hover:scale-105 stagger-item w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
