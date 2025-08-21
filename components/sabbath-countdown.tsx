"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Sun, Moon } from "lucide-react"

export function SabbathCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const calculateTimeLeft = () => {
      const now = new Date()
      const currentDay = now.getDay() // 0 = Sunday, 6 = Saturday
      const currentHour = now.getHours()

      // Calculate next Friday sunset (approximate 6:30 PM in Uganda)
      const nextFriday = new Date(now)
      let daysUntilFriday = (5 - currentDay + 7) % 7 // 5 = Friday

      // If it's Friday and past sunset, or Saturday before sunset, Sabbath is in progress
      if ((currentDay === 5 && currentHour >= 18) || (currentDay === 6 && currentHour < 18)) {
        // Sabbath is happening now, show next week's Sabbath
        daysUntilFriday = 7
      } else if (currentDay === 6 && currentHour >= 18) {
        // Saturday after sunset, next Sabbath is next Friday
        daysUntilFriday = 6
      } else if (daysUntilFriday === 0) {
        // It's Friday before sunset
        daysUntilFriday = 0
      }

      nextFriday.setDate(now.getDate() + daysUntilFriday)
      nextFriday.setHours(18, 30, 0, 0) // 6:30 PM

      const difference = nextFriday.getTime() - now.getTime()

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
  }, [isClient])

  if (!isClient) {
    return null // Prevent hydration mismatch
  }

  const isSabbathTime = () => {
    const now = new Date()
    const currentDay = now.getDay()
    const currentHour = now.getHours()

    return (currentDay === 5 && currentHour >= 18) || (currentDay === 6 && currentHour < 18)
  }

  if (isSabbathTime()) {
    return (
      <Card className="bg-gradient-to-r from-[#36747D] to-[#2a5a61] text-white">
        <CardContent className="p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Moon className="h-6 w-6" />
            <h3 className="text-xl font-semibold">Sabbath Blessings!</h3>
            <Sun className="h-6 w-6" />
          </div>
          <p className="text-lg opacity-90">The Sabbath is here! Join us for worship and fellowship.</p>
          <p className="text-sm opacity-75 mt-2">Sabbath ends at sunset (approximately 6:30 PM)</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-gradient-to-r from-[#36747D] to-[#2a5a61] text-white">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="h-5 w-5" />
            <h3 className="text-lg font-semibold">Next Sabbath Begins In:</h3>
          </div>
          <p className="text-sm opacity-75">Friday at sunset (6:30 PM)</p>
        </div>

        <div className="grid grid-cols-4 gap-4 text-center">
          <div className="bg-white/10 rounded-lg p-3">
            <div className="text-2xl font-bold">{timeLeft.days}</div>
            <div className="text-xs opacity-75">Days</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <div className="text-2xl font-bold">{timeLeft.hours}</div>
            <div className="text-xs opacity-75">Hours</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <div className="text-2xl font-bold">{timeLeft.minutes}</div>
            <div className="text-xs opacity-75">Minutes</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <div className="text-2xl font-bold">{timeLeft.seconds}</div>
            <div className="text-xs opacity-75">Seconds</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
