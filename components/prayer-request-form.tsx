"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Heart, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function PrayerRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Prayer Request Received",
        description: "Our prayer team will lift up your request to God. May His peace be with you.",
      })

      e.currentTarget.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit prayer request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-red-500" />
          <CardTitle>Prayer Request</CardTitle>
        </div>
        <CardDescription>
          Share your prayer needs with us. Our prayer team is here to intercede for you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="prayer-name">Your Name (Optional)</Label>
            <Input id="prayer-name" name="name" placeholder="Enter your name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="prayer-email">Email (Optional)</Label>
            <Input id="prayer-email" name="email" type="email" placeholder="your@email.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="prayer-request">Prayer Request *</Label>
            <Textarea id="prayer-request" name="request" placeholder="Share your prayer request..." required rows={4} />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Prayer Request"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
