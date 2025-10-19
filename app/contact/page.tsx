"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from "lucide-react"
import { sendContactEmail } from "@/app/actions/send-email"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    prayerRequest: false,
    prayerDetails: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        setSubmitStatus("success")
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          prayerRequest: false,
          prayerDetails: "",
        })

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        throw new Error(result.message)
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="lg:pr-[14.28%]">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/joyful-sabbath-gathering.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-cyan-900/75" />
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center animate-fade-in">
            We'd Love to Hear From You
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl opacity-95">
            Whether you're planning your first visit or have been part of our family for years, your voice matters to us
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Whether you're planning your first visit, need prayer, or want to learn more about our church, we're
                  here to help. Reach out to us using any of the methods below.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="border-l-4 border-l-amber-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-full shadow-lg">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Visit Us</h3>
                      <p className="text-muted-foreground">Plot 2, along Kolijja Street, Masaka Town, Uganda</p>
                      <p className="text-sm text-amber-600 mt-1">Near Masaka Town Center</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full shadow-lg">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Call Us</h3>
                      <p className="text-muted-foreground">+256 481 420 123</p>
                      <p className="text-sm text-blue-600 mt-1">Available during office hours</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-full shadow-lg">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Us</h3>
                      <p className="text-muted-foreground">info@masakasda.org</p>
                      <p className="text-sm text-green-600 mt-1">We respond within 24 hours</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full shadow-lg">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Office Hours</h3>
                      <div className="text-muted-foreground text-sm">
                        <p>Mon - Thu: 9:00 AM - 5:00 PM</p>
                        <p>Friday: 9:00 AM - 2:00 PM</p>
                        <p className="text-purple-600 mt-1">Sabbath: Worship Services Only</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+256 xxx xxx xxx"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="How can we help you?"
                        rows={4}
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="prayerRequest"
                          checked={formData.prayerRequest}
                          onCheckedChange={(checked) =>
                            setFormData((prev) => ({ ...prev, prayerRequest: checked as boolean }))
                          }
                        />
                        <Label htmlFor="prayerRequest" className="text-sm">
                          This is a prayer request
                        </Label>
                      </div>

                      {formData.prayerRequest && (
                        <div className="space-y-2">
                          <Label htmlFor="prayerDetails">Prayer Request Details</Label>
                          <Textarea
                            id="prayerDetails"
                            name="prayerDetails"
                            value={formData.prayerDetails}
                            onChange={handleInputChange}
                            placeholder="Please share your prayer request with us..."
                            rows={3}
                          />
                        </div>
                      )}
                    </div>

                    {submitStatus === "success" && (
                      <div className="flex items-center gap-2 p-4 bg-green-50 text-green-800 rounded-lg border border-green-200">
                        <CheckCircle className="h-5 w-5" />
                        <p className="text-sm font-medium">Message sent successfully! We'll get back to you soon.</p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="flex items-center gap-2 p-4 bg-red-50 text-red-800 rounded-lg border border-red-200">
                        <AlertCircle className="h-5 w-5" />
                        <p className="text-sm font-medium">{errorMessage}</p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Find Your Way to Us</h2>
            <p className="text-muted-foreground text-lg">
              Located in the heart of Masaka Town, easy to find and welcoming to all
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Masaka Town Center</h3>
              <p className="text-sm text-muted-foreground">5 minutes walk</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Main Bus Park</h3>
              <p className="text-sm text-muted-foreground">5 minutes walk</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Byansi Hospital</h3>
              <p className="text-sm text-muted-foreground">3 minutes walk</p>
            </Card>
          </div>

          <Card className="overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gray-200 relative">
              {/* Google Maps Embed with custom SDA marker */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-gray-800 dark:to-gray-900">
                <div className="text-center p-8">
                  <div className="relative inline-block mb-4">
                    <MapPin className="h-16 w-16 text-blue-600 animate-bounce" />
                    <img
                      src="/adventist-symbol--white.png"
                      alt="SDA Marker"
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground mb-4">
                    Seventh-day Adventist Church Masaka Town
                    <br />
                    Plot 2, along Kolijja Street, Masaka Town, Uganda
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <MapPin className="h-4 w-4 mr-2" />
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-3">Directions for First-Time Visitors:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">1.</span>
                <span>From Masaka Town Center, head towards Byansi Hospital (2-minute walk)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">2.</span>
                <span>Look for the white church building with the SDA symbol on Plot 2, along Kolijja Street</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">3.</span>
                <span>Parking is available on the church premises and nearby streets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">4.</span>
                <span>Our greeters will welcome you at the entrance every Sabbath morning</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
