"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Users, Mail, Phone, MessageSquare } from "lucide-react"
import { submitRSVP } from "@/app/actions/submit-rsvp"

interface RSVPModalProps {
  eventName: string
  eventDate: string
  trigger?: React.ReactNode
}

export function RSVPModal({ eventName, eventDate, trigger }: RSVPModalProps) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    const formData = new FormData(e.currentTarget)
    const result = await submitRSVP(formData)

    setIsSubmitting(false)

    if (result.success) {
      setMessage("Thank you for your RSVP! We look forward to seeing you.")
      setTimeout(() => {
        setOpen(false)
        setMessage("")
      }, 2000)
    } else {
      setMessage(result.error || "Something went wrong. Please try again.")
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="lg" className="bg-[#36747D] hover:bg-[#2a5a61]">
            <Calendar className="h-4 w-4 mr-2" />
            RSVP Now
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">RSVP for {eventName}</DialogTitle>
          <DialogDescription>
            <div className="flex items-center gap-2 mt-2">
              <Calendar className="h-4 w-4" />
              <span>{eventDate}</span>
            </div>
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input type="hidden" name="event_name" value={eventName} />
          <input type="hidden" name="event_date" value={eventDate} />

          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <div className="relative">
              <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input id="name" name="name" placeholder="John Doe" className="pl-10" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input id="email" name="email" type="email" placeholder="john@example.com" className="pl-10" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input id="phone" name="phone" type="tel" placeholder="+256 123 456 789" className="pl-10" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests">Number of Guests</Label>
            <Input id="guests" name="guests" type="number" min="1" defaultValue="1" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Textarea
                id="notes"
                name="notes"
                placeholder="Any dietary restrictions or special requests?"
                className="pl-10 min-h-[80px]"
              />
            </div>
          </div>

          {message && (
            <div
              className={`p-3 rounded-lg text-sm ${
                message.includes("Thank you") ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
              }`}
            >
              {message}
            </div>
          )}

          <Button type="submit" className="w-full bg-[#36747D] hover:bg-[#2a5a61]" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit RSVP"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
