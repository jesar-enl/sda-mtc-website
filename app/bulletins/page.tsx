"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Download, Search, Calendar, FileText, Eye } from "lucide-react"
import { SocialShareButtons } from "@/components/social-share-buttons"

export default function BulletinsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const bulletins = [
    {
      id: 1,
      title: "Sabbath Worship Bulletin",
      date: "2024-01-20",
      type: "Weekly Service",
      description: "Order of service, announcements, and weekly program for Sabbath worship",
      downloadUrl: "/bulletins/2024-01-20-sabbath.pdf",
      previewUrl: "/bulletins/2024-01-20-sabbath-preview.jpg",
      isCurrent: true,
    },
    {
      id: 2,
      title: "Youth Revival Weekend Program",
      date: "2024-01-26",
      type: "Special Event",
      description: "Complete schedule and program for the Youth Revival Weekend",
      downloadUrl: "/bulletins/2024-01-26-youth-revival.pdf",
      previewUrl: "/bulletins/2024-01-26-youth-preview.jpg",
      isCurrent: false,
    },
    // Add more bulletins
  ]

  const filteredBulletins = bulletins.filter(
    (bulletin) =>
      bulletin.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bulletin.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const currentBulletin = bulletins.find((b) => b.isCurrent)

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
            backgroundImage: "url('/church-bulletin-hero.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/90" />
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <FileText className="h-16 w-16 mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Church Bulletins</h1>
          <p className="text-xl md:text-2xl opacity-95 mb-8">
            Stay informed with our weekly programs, announcements, and special event schedules
          </p>
          <Button
            size="lg"
            className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 transition-transform hover:scale-105"
            asChild
          >
            <a href={currentBulletin?.downloadUrl} download>
              <Download className="mr-2 h-5 w-5" />
              Download Today's Bulletin
            </a>
          </Button>
        </div>
      </section>

      {/* Current Bulletin Spotlight */}
      {currentBulletin && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 text-lg px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                Current Bulletin
              </Badge>
              <h2 className="text-4xl font-bold mb-4">This Week's Program</h2>
            </div>
            <Card className="overflow-hidden shadow-2xl">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={currentBulletin.previewUrl || "/placeholder.svg"}
                    alt={currentBulletin.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="mb-4">{currentBulletin.type}</Badge>
                  <h3 className="text-3xl font-bold mb-4">{currentBulletin.title}</h3>
                  <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                    <Calendar className="h-5 w-5" />
                    <span className="text-lg">{formatDate(currentBulletin.date)}</span>
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg">{currentBulletin.description}</p>
                  <div className="space-y-3">
                    <Button size="lg" className="w-full bg-indigo-600 hover:bg-indigo-700" asChild>
                      <a href={currentBulletin.downloadUrl} download>
                        <Download className="mr-2 h-5 w-5" />
                        Download PDF
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="w-full bg-transparent" asChild>
                      <a href={currentBulletin.previewUrl} target="_blank" rel="noopener noreferrer">
                        <Eye className="mr-2 h-5 w-5" />
                        Preview
                      </a>
                    </Button>
                    <div className="pt-3">
                      <p className="text-sm text-muted-foreground mb-2">Share this bulletin:</p>
                      <SocialShareButtons
                        url={`https://masakasda.org/bulletins/${currentBulletin.id}`}
                        title={currentBulletin.title}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Search Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search bulletins by date, event, or keyword..."
              className="pl-10 h-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Previous Bulletins Archive */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Bulletin Archive</h2>
            <p className="text-muted-foreground text-lg">Access previous bulletins and special event programs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBulletins
              .filter((b) => !b.isCurrent)
              .map((bulletin) => (
                <Card key={bulletin.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48">
                    <img
                      src={bulletin.previewUrl || "/placeholder.svg"}
                      alt={bulletin.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge>{bulletin.type}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{bulletin.title}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(bulletin.date)}</span>
                      </div>
                      {bulletin.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                      <SocialShareButtons
                        url={`https://masakasda.org/bulletins/${bulletin.id}`}
                        title={bulletin.title}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Get Bulletins Delivered</h2>
          <p className="text-xl mb-8 opacity-90">Subscribe to receive the weekly bulletin in your email every Friday</p>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/90 border-0 h-12"
                />
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
