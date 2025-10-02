"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Bell, Calendar, Heart, BookOpen } from "lucide-react"

export function SubscriptionPreferences() {
  const [email, setEmail] = useState("")
  const [preferences, setPreferences] = useState({
    weekly_devotional: true,
    event_updates: true,
    prayer_requests: false,
    newsletter: true,
    sermon_notifications: true,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const preferenceOptions = [
    {
      id: "weekly_devotional",
      label: "Weekly Devotional",
      description: "Inspirational messages every week",
      icon: BookOpen,
    },
    {
      id: "event_updates",
      label: "Event Updates",
      description: "Stay informed about upcoming events",
      icon: Calendar,
    },
    {
      id: "prayer_requests",
      label: "Prayer Requests",
      description: "Join us in prayer for our community",
      icon: Heart,
    },
    {
      id: "newsletter",
      label: "Monthly Newsletter",
      description: "Church news and highlights",
      icon: Mail,
    },
    {
      id: "sermon_notifications",
      label: "Sermon Notifications",
      description: "Get notified when new sermons are available",
      icon: Bell,
    },
  ]

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setMessage("Thank you! Your subscription preferences have been saved.")
    setIsSubmitting(false)

    setTimeout(() => {
      setMessage("")
    }, 3000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Customize Your Updates</CardTitle>
        <CardDescription>Choose what you'd like to receive from us</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="subscription-email">Email Address *</Label>
            <Input
              id="subscription-email"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-4">
            <Label className="text-base font-semibold">Select Your Interests</Label>
            {preferenceOptions.map((option) => (
              <div
                key={option.id}
                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <Checkbox
                  id={option.id}
                  checked={preferences[option.id as keyof typeof preferences]}
                  onCheckedChange={(checked) =>
                    setPreferences((prev) => ({ ...prev, [option.id]: checked as boolean }))
                  }
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <option.icon className="h-4 w-4 text-[#36747D]" />
                    <Label htmlFor={option.id} className="font-medium cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>
              </div>
            ))}
          </div>

          {message && (
            <div className="p-3 rounded-lg text-sm bg-green-50 text-green-800 border border-green-200">{message}</div>
          )}

          <Button type="submit" className="w-full bg-[#36747D] hover:bg-[#2a5a61]" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Save Preferences"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
