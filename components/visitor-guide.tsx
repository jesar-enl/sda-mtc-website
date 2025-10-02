"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, Users, Coffee, Book, Heart } from "lucide-react"

export function VisitorGuide() {
  const guideItems = [
    {
      icon: Clock,
      title: "Service Times",
      description:
        "Sabbath School starts at 8:30 AM, followed by Divine Service at 11:00 AM. Services conclude around 6:00 PM.",
    },
    {
      icon: MapPin,
      title: "Parking",
      description: "Free parking is available on church grounds. Additional street parking is available nearby.",
    },
    {
      icon: Users,
      title: "What to Wear",
      description: "Come as you are! We welcome casual to formal attire. Comfort is key.",
    },
    {
      icon: Coffee,
      title: "Fellowship Meal",
      description: "Join us for a potluck fellowship meal after service. Visitors are always welcome!",
    },
    {
      icon: Book,
      title: "Sabbath School",
      description: "Classes for all ages including children, youth, and adults. We'll help you find the right class.",
    },
    {
      icon: Heart,
      title: "First-Time Visitors",
      description: "Stop by our Welcome Desk for a visitor packet and to meet our greeters who can answer questions.",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {guideItems.map((item, index) => (
        <Card
          key={index}
          className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-[#36747D] stagger-item"
        >
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-[#36747D]/10 rounded-lg">
                <item.icon className="h-6 w-6 text-[#36747D]" />
              </div>
              <CardTitle className="text-lg">{item.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">{item.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
