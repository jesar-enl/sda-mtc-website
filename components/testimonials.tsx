"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Nakato",
      role: "Member since 2018",
      image: "/african-woman-smiling.jpg",
      quote:
        "This church has been a blessing to my family. The love and support we've received here is incredible. We've grown spiritually and found true community.",
      initials: "SN",
    },
    {
      name: "David Mukasa",
      role: "Youth Leader",
      image: "/african-man-smiling.png",
      quote:
        "The youth ministry here changed my life. I found purpose and direction through the mentorship and biblical teaching. This is truly a family.",
      initials: "DM",
    },
    {
      name: "Grace Nambi",
      role: "New Member",
      image: "/african-woman-happy.jpg",
      quote:
        "As a first-time visitor, I was warmly welcomed and immediately felt at home. The genuine care and fellowship here is unlike anywhere else.",
      initials: "GN",
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="hover:shadow-lg transition-all duration-300 stagger-item">
          <CardContent className="pt-6">
            <Quote className="h-8 w-8 text-[#36747D] mb-4 opacity-50" />
            <p className="text-muted-foreground mb-6 italic">{testimonial.quote}</p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                <AvatarFallback className="bg-[#36747D] text-white">{testimonial.initials}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
