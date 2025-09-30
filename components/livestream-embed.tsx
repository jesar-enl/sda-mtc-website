"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Radio, Calendar, Clock, Users, Video } from "lucide-react"

interface LivestreamEmbedProps {
  youtubeVideoId?: string
  archivedVideoId?: string // Added archived video ID for when not live
  title?: string
  description?: string
  scheduledTime?: string
}

export function LivestreamEmbed({
  youtubeVideoId = "jfKfPfyJRdk", // Live stream ID
  archivedVideoId = "uaqiuhBHn7A", // Default archived video - replace with your last sermon
  title = "Live Sabbath Worship Service",
  description = "Join us for our weekly Sabbath worship service",
  scheduledTime = "Every Saturday at 8:30 AM EAT",
}: LivestreamEmbedProps) {
  const [isLive, setIsLive] = useState(false)
  const [viewerCount, setViewerCount] = useState(0)
  const currentVideoId = isLive ? youtubeVideoId : archivedVideoId

  // Check if stream is live (you can enhance this with YouTube API)
  useEffect(() => {
    // This is a placeholder - in production, you'd check YouTube API
    // For now, we'll assume it's live on Saturdays between 8:30 AM - 6:00 PM
    const checkIfLive = () => {
      const now = new Date()
      const day = now.getDay()
      const hour = now.getHours()

      // Saturday (6) between 8:30 AM and 6:00 PM
      if (day === 6 && hour >= 8 && hour < 18) {
        setIsLive(true)
        setViewerCount(Math.floor(Math.random() * 50) + 20) // Simulated viewer count
      } else {
        setIsLive(false)
      }
    }

    checkIfLive()
    const interval = setInterval(checkIfLive, 60000) // Check every minute

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-4">
      {/* Live Indicator */}
      {isLive && (
        <div className="flex items-center justify-between p-4 bg-red-50 border-2 border-red-500 rounded-lg animate-pulse-slow">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Radio className="h-6 w-6 text-red-600" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </div>
            <div>
              <p className="font-bold text-red-600 text-lg">LIVE NOW</p>
              <p className="text-sm text-red-600">Worship service in progress</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-red-600">
            <Users className="h-5 w-5" />
            <span className="font-semibold">{viewerCount} watching</span>
          </div>
        </div>
      )}

      {!isLive && (
        <div className="flex items-center justify-between p-4 bg-blue-50 border-2 border-blue-500 rounded-lg">
          <div className="flex items-center gap-3">
            <Video className="h-6 w-6 text-blue-600" />
            <div>
              <p className="font-bold text-blue-600 text-lg">Previous Service</p>
              <p className="text-sm text-blue-600">Watch our most recent worship service</p>
            </div>
          </div>
        </div>
      )}

      {/* Video Embed */}
      <Card className="overflow-hidden">
        <div className="aspect-video bg-black relative">
          <iframe
            src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=0&rel=0`}
            title={isLive ? title : "Previous Worship Service"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-2xl font-bold mb-2">{isLive ? title : "Most Recent Service"}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>

          {!isLive && (
            <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
              <Calendar className="h-5 w-5 text-[#36747D] mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Next Service</p>
                <p className="text-sm text-muted-foreground">{scheduledTime}</p>
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <Button
              className="flex-1 bg-[#36747D] hover:bg-[#2a5a61]"
              onClick={() => window.open(`https://www.youtube.com/watch?v=${currentVideoId}`, "_blank")}
            >
              <Radio className="h-4 w-4 mr-2" />
              Watch on YouTube
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open("https://www.youtube.com/@SDAMasakaTownChurch/streams", "_blank")}
            >
              View Past Services
            </Button>
          </div>
        </div>
      </Card>

      {/* Service Schedule */}
      <Card className="p-6">
        <h4 className="font-semibold mb-4 flex items-center gap-2">
          <Clock className="h-5 w-5 text-[#36747D]" />
          Sabbath Service Schedule
        </h4>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
            <span className="font-medium">Sabbath School</span>
            <span className="text-muted-foreground">8:30 AM - 10:00 AM</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
            <span className="font-medium">Divine Service</span>
            <span className="text-muted-foreground">10:30 AM - 12:30 PM</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
            <span className="font-medium">Afternoon Programs</span>
            <span className="text-muted-foreground">2:00 PM - 6:00 PM</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
