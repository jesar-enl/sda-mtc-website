import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, Book, Headphones, Video, FileText } from "lucide-react"

export default function ResourcesPage() {
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
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
          <p className="text-xl opacity-90">
            Spiritual resources to deepen your faith and enhance your Bible study experience
          </p>
        </div>
      </section>

      {/* Sabbath School Lessons */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sabbath School Lessons</h2>
            <p className="text-muted-foreground text-lg">Quarterly Bible study guides for personal and group study</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sabbathSchoolLessons.map((lesson, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-orange-500 text-white">{lesson.quarter}</Badge>
                    <Book className="h-5 w-5 text-orange-500" />
                  </div>
                  <CardTitle className="text-xl">{lesson.title}</CardTitle>
                  <CardDescription>{lesson.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-orange-500 hover:bg-orange-600">
                      <Download className="h-4 w-4 mr-1" />
                      PDF
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Headphones className="h-4 w-4 mr-1" />
                      Audio
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Devotionals */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Devotionals</h2>
            <p className="text-muted-foreground text-lg">
              Daily inspiration and spiritual nourishment for your walk with God
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devotionals.map((devotional, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
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
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bible Study Guides */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bible Study Guides</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive study materials for personal growth and evangelism
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {bibleStudyGuides.map((guide, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-blue-100 text-blue-800">{guide.lessons} Lessons</Badge>
                    <Book className="h-5 w-5 text-orange-500" />
                  </div>
                  <CardTitle className="text-xl">{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    <Download className="h-4 w-4 mr-2" />
                    Download Study Guide
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Adventist Media Links */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Adventist Media</h2>
            <p className="text-muted-foreground text-lg">
              Connect with inspiring content from Adventist ministries worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adventistMedia.map((media, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{media.type}</Badge>
                    {media.type.includes("TV") || media.type.includes("Ministry") ? (
                      <Video className="h-5 w-5 text-orange-500" />
                    ) : media.type.includes("Radio") ? (
                      <Headphones className="h-5 w-5 text-[#36747D]" />
                    ) : (
                      <FileText className="h-5 w-5 text-orange-500" />
                    )}
                  </div>
                  <CardTitle className="text-xl">{media.name}</CardTitle>
                  <CardDescription>{media.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600" asChild>
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

      {/* Newsletter Signup */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Stay Updated</CardTitle>
              <CardDescription>
                Subscribe to our newsletter to receive the latest resources, sermon updates, and church announcements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <Button className="bg-orange-500 hover:bg-orange-600">Subscribe</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                We respect your privacy and will never share your email address.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
