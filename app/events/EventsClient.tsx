"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, MapPin, Users, ChevronRight, Search, Filter, Video, Heart, Book } from "lucide-react"

export default function EventsClient() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0)

  const bibleVerses = [
    {
      text: "For where two or three gather in my name, there am I with them.",
      reference: "Matthew 18:20",
    },
    {
      text: "Let us not giving up meeting together, as some are in the habit of doing, but encouraging one another.",
      reference: "Hebrews 10:25",
    },
    {
      text: "They devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer.",
      reference: "Acts 2:42",
    },
  ]

  // Rotate verse every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerseIndex((prev) => (prev + 1) % bibleVerses.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [bibleVerses.length])

  const upcomingEvents = [
    {
      id: 1,
      title: "Weekly Sabbath Worship Service",
      date: "2024-01-20",
      time: "8:30 AM - 6:00 PM",
      location: "Main Sanctuary",
      category: "Worship",
      description:
        "Join us for our weekly Sabbath worship service featuring inspiring music, prayer, and biblical preaching. All are welcome to experience God's love and fellowship with our church family.",
      organizer: "Worship Committee",
      expectedAttendees: "200+",
      recurring: true,
      image: "/event-sabbath-worship.png",
      videoUrl: "https://youtube.com/watch?v=example1",
      featured: true,
    },
    {
      id: 2,
      title: "Youth Revival Weekend",
      date: "2024-01-26",
      time: "Friday 6:00 PM - Sunday 4:00 PM",
      location: "Church Campus & Youth Hall",
      category: "Youth",
      description:
        "A powerful weekend of spiritual renewal designed specifically for young people. Features dynamic speakers, contemporary worship, small group discussions, and fellowship activities.",
      organizer: "Youth Ministry",
      expectedAttendees: "80-100",
      recurring: false,
      image: "/event-youth-revival.png",
    },
    {
      id: 3,
      title: "Community Health Fair",
      date: "2024-02-03",
      time: "8:00 AM - 4:00 PM",
      location: "Church Grounds",
      category: "Community",
      description:
        "Free health screenings, wellness education, cooking demonstrations, and medical consultations for our community. Open to all members of the public.",
      organizer: "Health Ministry",
      expectedAttendees: "300+",
      recurring: false,
      image: "/event-health-fair.png",
    },
    {
      id: 4,
      title: "Women's Ministry Retreat",
      date: "2024-02-10",
      time: "Friday 6:00 PM - Sunday 2:00 PM",
      location: "Lake Victoria Retreat Center",
      category: "Women",
      description:
        "A weekend of spiritual refreshment, fellowship, and personal growth for women of all ages. Includes workshops, devotional time, and recreational activities.",
      organizer: "Women's Ministry",
      expectedAttendees: "50-60",
      recurring: false,
      image: "/event-womens-retreat.png",
    },
    {
      id: 5,
      title: "Pathfinder Investiture Service",
      date: "2024-02-17",
      time: "10:00 AM - 12:00 PM",
      location: "Main Sanctuary",
      category: "Youth",
      description:
        "Celebration service recognizing Pathfinders who have completed their honors and achievements. Family and friends are invited to witness this special ceremony.",
      organizer: "Pathfinder Club",
      expectedAttendees: "150+",
      recurring: false,
      image: "/event-pathfinder-investiture.png",
    },
    {
      id: 6,
      title: "Evangelistic Series: 'Hope for Tomorrow'",
      date: "2024-02-24",
      time: "7:00 PM - 8:30 PM (Nightly for 2 weeks)",
      location: "Main Sanctuary",
      category: "Evangelism",
      description:
        "A two-week evangelistic series exploring Bible prophecy and God's plan for the future. Guest speaker Pastor Michael Wamala will present inspiring messages of hope.",
      organizer: "Evangelism Committee",
      expectedAttendees: "250+",
      recurring: false,
      image: "/event-evangelistic-series.png",
    },
  ]

  const categories = ["All", "Worship", "Youth", "Community", "Women", "Evangelism"]

  const filteredEvents = upcomingEvents.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredEvent = upcomingEvents.find((e) => e.featured)

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "worship":
        return "bg-blue-100 text-blue-800"
      case "youth":
        return "bg-green-100 text-green-800"
      case "community":
        return "bg-purple-100 text-purple-800"
      case "women":
        return "bg-pink-100 text-pink-800"
      case "evangelism":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="lg:pr-[14.28%]">
      <section className="relative py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/masaka-church-scenic.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/80" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Gather. Worship. Grow.</h1>
          <p className="text-xl md:text-2xl opacity-95 mb-8">
            Join us for inspiring gatherings where faith comes alive and community thrives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8">
              <Calendar className="mr-2 h-5 w-5" />
              View Calendar
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 text-lg px-8 bg-transparent"
            >
              Plan Your Visit
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="h-12 w-12 text-rose-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Welcome, Friend!</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you're visiting for the first time or have been part of our family for years, we're thrilled to have
            you join us. Our events are designed to inspire, connect, and help you grow in your faith journey. Explore
            what's happening and find your place in our vibrant community!
          </p>
        </div>
      </section>

      {featuredEvent && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 text-lg px-4 py-2 bg-gradient-to-r from-rose-500 to-orange-500 text-white">
                Featured Event
              </Badge>
              <h2 className="text-4xl font-bold mb-4">Don't Miss This!</h2>
            </div>
            <Card className="overflow-hidden shadow-2xl">
              <div className="md:flex">
                <div className="md:w-1/2 relative">
                  <img
                    src={featuredEvent.image || "/placeholder.svg"}
                    alt={featuredEvent.title}
                    className="w-full h-full object-cover"
                  />
                  {featuredEvent.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Button size="lg" className="rounded-full w-20 h-20 bg-white/90 hover:bg-white">
                        <Video className="h-10 w-10 text-blue-600" />
                      </Button>
                    </div>
                  )}
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="mb-4">{featuredEvent.category}</Badge>
                  <h3 className="text-3xl font-bold mb-4">{featuredEvent.title}</h3>
                  <p className="text-muted-foreground mb-6 text-lg">{featuredEvent.description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">{formatDate(featuredEvent.date)}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span>{featuredEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <span>{featuredEvent.location}</span>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setSelectedEvent(selectedEvent === featuredEvent.id ? null : featuredEvent.id)}
                  >
                    Learn More
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search events by name or description..."
                className="pl-10 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-blue-600" : ""}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground text-lg">
              Mark your calendar and join us for these upcoming events and activities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredEvents.map((event) => (
              <Card
                key={event.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                  </div>
                  {event.recurring && (
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90">
                        Recurring
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span className="font-medium">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span>{event.expectedAttendees} expected</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                  >
                    {selectedEvent === event.id ? "Show Less" : "Learn More"}
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>

                  {selectedEvent === event.id && (
                    <div className="mt-6 p-4 bg-muted/30 rounded-lg animate-fade-in">
                      <h4 className="font-semibold mb-2">Full Details</h4>
                      <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                      <p className="text-sm">
                        <span className="font-medium">Organized by:</span> {event.organizer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Never Miss a Moment</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to receive personalized event notifications, early registration access, and exclusive updates
            delivered straight to your inbox.
          </p>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/90 border-0 h-12"
                />
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Subscribe
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>Weekly Updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>Early Registration</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>Special Announcements</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <CardContent className="p-8 text-center">
              <div className="mb-4">
                <div className="inline-block p-3 bg-amber-100 rounded-full">
                  <Book className="h-6 w-6 text-amber-600" />
                </div>
              </div>
              <blockquote className="text-2xl font-serif italic text-gray-800 mb-4">
                "{bibleVerses[currentVerseIndex].text}"
              </blockquote>
              <p className="text-lg font-semibold text-amber-700">{bibleVerses[currentVerseIndex].reference}</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
