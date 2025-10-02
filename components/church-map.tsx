"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Phone, Mail } from "lucide-react"

export function ChurchMap() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Map Embed */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-[#36747D]" />
            Find Us
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="aspect-video bg-muted relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7562!2d31.7345!3d-0.3376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMjAnMTUuNCJTIDMxwrA0NCcwNC4yIkU!5e0!3m2!1sen!2sug!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Location & Contact</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#36747D]" />
              Address
            </h3>
            <p className="text-muted-foreground">
              Masaka Town SDA Church
              <br />
              Nyendo-Masaka Road
              <br />
              Masaka, Uganda
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#36747D]" />
              Phone
            </h3>
            <p className="text-muted-foreground">+256 123 456 789</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#36747D]" />
              Email
            </h3>
            <p className="text-muted-foreground">info@masakasda.org</p>
          </div>

          <Button className="w-full bg-[#36747D] hover:bg-[#2a5a61]" size="lg">
            <Navigation className="h-4 w-4 mr-2" />
            Get Directions
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
