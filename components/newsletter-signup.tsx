"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Bell, Calendar, BookOpen } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [preferences, setPreferences] = useState({
    weekly: true,
    events: true,
    sermons: false,
    prayer: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Mail className="h-6 w-6 text-green-600" />
            <h3 className="text-xl font-semibold text-green-800">Thank You!</h3>
          </div>
          <p className="text-green-700">
            You've successfully subscribed to our church updates. Welcome to our church family communications!
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-[#36747D] text-white rounded-full">
            <Bell className="h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-xl">Stay Connected</CardTitle>
            <CardDescription>Get the latest church news, events, and spiritual encouragement</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-base font-medium">What would you like to receive?</Label>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="weekly"
                  checked={preferences.weekly}
                  onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, weekly: checked as boolean }))}
                />
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#36747D]" />
                  <Label htmlFor="weekly" className="text-sm font-normal">
                    Weekly church bulletin and announcements
                  </Label>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox
                  id="events"
                  checked={preferences.events}
                  onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, events: checked as boolean }))}
                />
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4 text-[#36747D]" />
                  <Label htmlFor="events" className="text-sm font-normal">
                    Special events and ministry updates
                  </Label>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox
                  id="sermons"
                  checked={preferences.sermons}
                  onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, sermons: checked as boolean }))}
                />
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-[#36747D]" />
                  <Label htmlFor="sermons" className="text-sm font-normal">
                    New sermon recordings and Bible studies
                  </Label>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox
                  id="prayer"
                  checked={preferences.prayer}
                  onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, prayer: checked as boolean }))}
                />
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#36747D]" />
                  <Label htmlFor="prayer" className="text-sm font-normal">
                    Prayer requests and spiritual encouragement
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full bg-[#36747D] hover:bg-[#2a5a61]" disabled={isSubmitting}>
            {isSubmitting ? "Subscribing..." : "Subscribe to Updates"}
          </Button>

          <p className="text-xs text-muted-foreground text-center">We respect your privacy. Unsubscribe at any time.</p>
        </form>
      </CardContent>
    </Card>
  )
}
