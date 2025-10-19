"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Download,
  ExternalLink,
  Book,
  Headphones,
  Video,
  FileText,
  Search,
  Share2,
  MessageSquare,
  Sparkles,
} from "lucide-react"
import { SocialShareButtons } from "@/components/social-share-buttons"

export default function ResourcesClientPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("All")

  const sabbathSchoolLessons = [
    {
      title: "1 Peter: A Living Hope",
      quarter: "Q1 2024",
      description: "Explore the themes of hope, suffering, and Christian living in Peter's first epistle.",
      downloadUrl: "/lessons/q1-2024-peter.pdf",
      audioUrl: "/lessons/q1-2024-peter-audio.zip",
    },
    {
      title: "The Book of Psalms",
      quarter: "Q4 2023",
      description: "Journey through the beautiful poetry and worship songs of ancient Israel.",
      downloadUrl: "/lessons/q4-2023-psalms.pdf",
      audioUrl: "/lessons/q4-2023-psalms-audio.zip",
    },
    {
      title: "God's Mission, My Mission",
      quarter: "Q3 2023",
      description: "Understanding our role in God's plan to reach the world with His love.",
      downloadUrl: "/lessons/q3-2023-mission.pdf",
      audioUrl: "/lessons/q3-2023-mission-audio.zip",
    },
  ]

  const devotionals = [
    {
      title: "Morning Watch Devotional 2024",
      author: "General Conference",
      description: "Daily devotional readings to start your day with God's Word.",
      type: "PDF",
      downloadUrl: "/devotionals/morning-watch-2024.pdf",
    },
    {
      title: "Youth Devotional: Walking with Jesus",
      author: "Youth Department",
      description: "Specially designed devotional for young people seeking to grow in faith.",
      type: "PDF",
      downloadUrl: "/devotionals/youth-walking-jesus.pdf",
    },
    {
      title: "Family Worship Ideas",
      author: "Family Ministries",
      description: "Creative ideas and resources for meaningful family worship time.",
      type: "PDF",
      downloadUrl: "/devotionals/family-worship-ideas.pdf",
    },
  ]

  const bibleStudyGuides = [
    {
      title: "Discover Bible Study Guides",
      lessons: 26,
      description: "Comprehensive Bible study series covering fundamental Christian beliefs.",
      downloadUrl: "/bible-studies/discover-guides.pdf",
    },
    {
      title: "Prophecy Made Plain",
      lessons: 12,
      description: "Understanding Bible prophecy and end-time events in simple terms.",
      downloadUrl: "/bible-studies/prophecy-plain.pdf",
    },
    {
      title: "Steps to Christ Study Guide",
      lessons: 8,
      description: "Based on Ellen White's classic book, guiding readers to Jesus.",
      downloadUrl: "/bible-studies/steps-to-christ.pdf",
    },
    {
      title: "Health and Healing",
      lessons: 10,
      description: "Biblical principles for physical, mental, and spiritual wellness.",
      downloadUrl: "/bible-studies/health-healing.pdf",
    },
  ]

  const adventistMedia = [
    {
      name: "Hope Channel International",
      description: "24/7 Christian television programming with inspiring content for the whole family.",
      url: "https://hopechannel.com",
      type: "TV Channel",
    },
    {
      name: "Adventist World Radio (AWR)",
      description: "Global radio ministry broadcasting in over 100 languages worldwide.",
      url: "https://awr.org",
      type: "Radio",
    },
    {
      name: "Amazing Facts",
      description: "Bible-based evangelistic ministry with study guides, videos, and resources.",
      url: "https://amazingfacts.org",
      type: "Ministry",
    },
    {
      name: "It Is Written",
      description: "Television ministry featuring Bible-based programs and study materials.",
      url: "https://itiswritten.com",
      type: "TV Ministry",
    },
    {
      name: "Voice of Prophecy",
      description: "Radio and online ministry offering Bible studies and Christian education.",
      url: "https://vop.com",
      type: "Radio Ministry",
    },
    {
      name: "Adventist Review",
      description: "Official magazine of the Seventh-day Adventist Church with news and inspiration.",
      url: "https://adventistreview.org",
      type: "Magazine",
    },
  ]

  return (
    <div className="lg:pr-[14.28%]">
      <section className="relative py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/peaceful-sunrise.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/85 to-teal-900/80" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white z-10">
          <Sparkles className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Grow in Faith</h1>
          <p className="text-xl md:text-2xl opacity-95 mb-8">
            Discover spiritual resources to deepen your walk with God and enrich your Bible study experience
          </p>
          <Button size="lg" className="bg-white text-emerald-900 hover:bg-gray-100 text-lg px-8">
            <Book className="mr-2 h-5 w-5" />
            Start Exploring
          </Button>
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto">
          <Card className="border-emerald-200 shadow-lg">
            <CardHeader className="text-center">
              <div className="inline-block p-3 bg-emerald-100 rounded-full mb-4 mx-auto">
                <Sparkles className="h-8 w-8 text-emerald-600" />
              </div>
              <CardTitle className="text-3xl">New Here? Start Your Journey</CardTitle>
              <CardDescription className="text-lg">
                We've curated the perfect resources to help you begin your spiritual growth
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Book className="h-10 w-10 mx-auto mb-3 text-emerald-600" />
                    <CardTitle className="text-lg">Step 1: Bible Basics</CardTitle>
                    <CardDescription>Start with our beginner-friendly Bible study guides</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <a href="/bible-studies/discover-guides.pdf" download>
                        Get Started
                      </a>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <FileText className="h-10 w-10 mx-auto mb-3 text-teal-600" />
                    <CardTitle className="text-lg">Step 2: Daily Devotionals</CardTitle>
                    <CardDescription>Build a consistent habit with morning devotionals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <a href="/devotionals/morning-watch-2024.pdf" download>
                        Download Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Video className="h-10 w-10 mx-auto mb-3 text-blue-600" />
                    <CardTitle className="text-lg">Step 3: Watch & Learn</CardTitle>
                    <CardDescription>Explore inspiring video content from Adventist media</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <a href="https://hopechannel.com" target="_blank" rel="noopener noreferrer">
                        Browse Videos
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search resources by topic, format, or keyword..."
                className="pl-10 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="flex gap-2">
                <span className="text-sm font-medium self-center">Type:</span>
                {["All", "Sabbath School", "Devotionals", "Bible Studies", "Media"].map((filter) => (
                  <Button
                    key={filter}
                    size="sm"
                    variant={selectedFilter === filter ? "default" : "outline"}
                    onClick={() => setSelectedFilter(filter)}
                    className={selectedFilter === filter ? "bg-emerald-600" : ""}
                  >
                    {filter}
                  </Button>
                ))}
              </div>
              <div className="flex gap-2">
                <span className="text-sm font-medium self-center">Age:</span>
                {["All", "Children", "Youth", "Adults", "Families"].map((age) => (
                  <Button
                    key={age}
                    size="sm"
                    variant={selectedAgeGroup === age ? "default" : "outline"}
                    onClick={() => setSelectedAgeGroup(age)}
                    className={selectedAgeGroup === age ? "bg-teal-600" : ""}
                  >
                    {age}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 text-lg px-4 py-2 bg-gradient-to-r from-rose-500 to-orange-500 text-white">
              What's New
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Latest Resources</h2>
            <p className="text-muted-foreground text-lg">
              Fresh content added this week to support your spiritual journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-emerald-500">New</Badge>
                <CardTitle>Q1 2024 Sabbath School Lesson</CardTitle>
                <CardDescription>
                  Just released: Study guide on 1 Peter with daily readings and discussion questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-emerald-600 hover:bg-emerald-700" asChild>
                    <a href="/lessons/q1-2024-peter.pdf" download>
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </a>
                  </Button>
                  <Button size="sm" variant="outline">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            {/* Add more new resources */}
          </div>
        </div>
      </section>

      {/* Enhanced Sabbath School Lessons with previews */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Book className="h-12 w-12 mx-auto mb-4 text-emerald-600" />
            <h2 className="text-4xl font-bold mb-4">Sabbath School Lessons</h2>
            <p className="text-muted-foreground text-lg">Quarterly Bible study guides for personal and group study</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sabbathSchoolLessons.map((lesson, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-emerald-600 text-white">{lesson.quarter}</Badge>
                    <Book className="h-5 w-5 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">{lesson.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{lesson.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Preview:</strong> This quarter explores themes of hope, perseverance, and Christian living
                      through Peter's powerful epistle...
                    </p>
                  </div>
                  <div className="flex gap-2 mb-3">
                    <Button size="sm" className="flex-1 bg-emerald-600 hover:bg-emerald-700" asChild>
                      <a href={lesson.downloadUrl} download>
                        <Download className="h-4 w-4 mr-1" />
                        PDF
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={lesson.audioUrl} download>
                        <Headphones className="h-4 w-4 mr-1" />
                        Audio
                      </a>
                    </Button>
                  </div>
                  <SocialShareButtons
                    url={`https://masakasda.org/resources/lessons/${lesson.quarter}`}
                    title={lesson.title}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Devotionals */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Devotionals</h2>
            <p className="text-muted-foreground text-lg">
              Daily inspiration and spiritual nourishment for your walk with God
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devotionals.map((devotional, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{devotional.type}</Badge>
                    <FileText className="h-5 w-5 text-[#36747D]" />
                  </div>
                  <CardTitle className="text-xl">{devotional.title}</CardTitle>
                  <CardDescription>
                    <span className="font-medium">By {devotional.author}</span>
                    <br />
                    {devotional.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                    <a href={devotional.downloadUrl} download>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bible Study Guides */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Bible Study Guides</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive study materials for personal growth and evangelism
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {bibleStudyGuides.map((guide, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-teal-600 text-white">{guide.lessons} Lessons</Badge>
                    <Book className="h-5 w-5 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                    <a href={guide.downloadUrl} download>
                      <Download className="h-4 w-4 mr-2" />
                      Download Study Guide
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Adventist Media Links */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Adventist Media</h2>
            <p className="text-muted-foreground text-lg">
              Connect with inspiring content from Adventist ministries worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adventistMedia.map((media, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{media.type}</Badge>
                    {media.type.includes("TV") || media.type.includes("Ministry") ? (
                      <Video className="h-5 w-5 text-emerald-600" />
                    ) : media.type.includes("Radio") ? (
                      <Headphones className="h-5 w-5 text-[#36747D]" />
                    ) : (
                      <FileText className="h-5 w-5 text-emerald-600" />
                    )}
                  </div>
                  <CardTitle className="text-xl">{media.name}</CardTitle>
                  <CardDescription>{media.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                    <a href={media.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Website
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader className="text-center">
              <MessageSquare className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <CardTitle className="text-3xl">Help Us Serve You Better</CardTitle>
              <CardDescription className="text-lg">
                What resources would you love to see next? Share your thoughts and suggestions with us!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input placeholder="What topics interest you?" className="h-12" />
                <textarea
                  placeholder="Tell us more about the resources you'd like to access..."
                  className="w-full p-4 border rounded-md min-h-[120px] focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg">
                  Submit Feedback
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Connected</h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest resources, sermon updates, and exclusive content delivered to your inbox every week
          </p>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/90 border-0 h-12"
                />
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm mt-4 opacity-80">Join 500+ members receiving weekly inspiration and resources</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
