"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RSVPModal } from "@/components/rsvp-modal"
import { Calendar } from "lucide-react"

interface EventCountdownProps {
  eventName: string
  eventDate: Date
  eventDescription: string
}

export function EventCountdown({ eventName, eventDate, eventDescription }: EventCountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = eventDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [eventDate])

  return (
    <Card className="bg-gradient-to-br from-[#36747D] to-[#2a5a61] text-white border-none overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/abstract-geometric-flow.png')] opacity-10"></div>
      <CardHeader className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="h-5 w-5" />
          <span className="text-sm font-semibold uppercase tracking-wide">Special Event</span>
        </div>
        <CardTitle className="text-2xl md:text-3xl">{eventName}</CardTitle>
        <CardDescription className="text-white/80 text-base">{eventDescription}</CardDescription>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="grid grid-cols-4 gap-4 mb-6">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mb-2">
                <div className="text-3xl md:text-4xl font-bold">{value}</div>
              </div>
              <div className="text-sm uppercase tracking-wide opacity-90">{unit}</div>
            </div>
          ))}
        </div>
        <RSVPModal
          eventName={eventName}
          eventDate={eventDate.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        />
      </CardContent>
    </Card>
  )
}
