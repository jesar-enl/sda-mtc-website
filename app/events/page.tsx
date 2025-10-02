"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, ChevronRight } from "lucide-react"

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)

  const upcomingEvents = [
    {
      id: 1,
      title: "Weekly Sabbath Worship Service",
      date: "2024-01-20",
      time: "9:00 AM - 12:00 PM",
      location: "Main Sanctuary",
      category: "Worship",
      description:
        "Join us for our weekly Sabbath worship service featuring inspiring music, prayer, and biblical preaching. All are welcome to experience God's love and fellowship with our church family.",
      organizer: "Worship Committee",
      expectedAttendees: "200+",
      recurring: true,
      image: "/event-sabbath-worship.png",
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
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-sky-400 to-sky-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Upcoming Events</h1>
          <p className="text-xl opacity-90">
            Join us for inspiring gatherings, fellowship, and opportunities to grow in faith
          </p>
        </div>
      </section>

      {/* Events Calendar */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Coming Up</h2>
            <p className="text-muted-foreground text-lg">
              Mark your calendar and join us for these upcoming events and activities
            </p>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                        {event.recurring && (
                          <Badge variant="outline" className="text-xs">
                            Recurring
                          </Badge>
                        )}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-sky-500" />
                          <span className="font-medium">{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-sky-500" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-sky-500" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-sky-500" />
                          <span>{event.expectedAttendees} expected</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Organized by:</span> {event.organizer}
                      </div>
                      <Button
                        className="bg-sky-500 hover:bg-sky-600"
                        onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                      >
                        {selectedEvent === event.id ? "Show Less" : "Learn More"}
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>

                    {selectedEvent === event.id && (
                      <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-semibold mb-2">Event Details</h4>
                        <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                        <div className="flex gap-3">
                          <Button size="sm" className="bg-sky-500 hover:bg-sky-600">
                            Register Now
                          </Button>
                          <Button size="sm" variant="outline">
                            Add to Calendar
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Event Categories</h2>
            <p className="text-muted-foreground text-lg">
              Explore different types of events and activities at our church
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-blue-100 text-blue-800 rounded-full w-fit">
                  <Calendar className="h-6 w-6" />
                </div>
                <CardTitle>Worship Services</CardTitle>
                <CardDescription>Regular Sabbath worship, prayer meetings, and special services</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-green-100 text-green-800 rounded-full w-fit">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle>Fellowship Events</CardTitle>
                <CardDescription>Social gatherings, potlucks, and community building activities</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-purple-100 text-purple-800 rounded-full w-fit">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle>Educational Programs</CardTitle>
                <CardDescription>Bible studies, seminars, workshops, and training sessions</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Subscribe to Events */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Stay Informed</CardTitle>
              <CardDescription>
                Subscribe to our event notifications to never miss an important church gathering or activity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#36747D]"
                />
                <Button className="bg-sky-500 hover:bg-sky-600">Subscribe</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Get weekly event updates and special announcements delivered to your inbox.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
