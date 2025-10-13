"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Heart,
  Music,
  Stethoscope,
  TreePine,
  Baby,
  UserCheck,
  HandHeart,
  Mail,
  MessageCircle,
  Globe,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MinistriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [language, setLanguage] = useState("en")

  const translations = {
    en: {
      title: "Welcome to Our Ministries",
      subtitle: "Where Every Gift Finds a Home",
      description:
        "At Seventh-day Adventist Church Masaka Town, we believe everyone has unique gifts and talents to share. Our diverse ministries provide opportunities for you to grow spiritually, serve others, and build meaningful connections within our church family.",
      exploreButton: "Explore Ministries",
      spotlightTitle: "Featured This Month",
      getInvolvedTitle: "Get Involved",
      getInvolvedDescription: "Find your place in our church community through these meaningful ministry opportunities",
      ctaTitle: "Ready to Get Involved?",
      ctaDescription:
        "Whether you're looking to serve, learn, or connect with others, there's a place for you in our ministries. Contact us to learn more about how you can get involved and make a difference.",
    },
    lg: {
      title: "Tukusanyukidde mu Minisitule Yaffe",
      subtitle: "Buli Kirabo Kifuna Amaka",
      description:
        "Mu Kkanisa ya Seventh-day Adventist e Masaka Town, tukkiriza nti buli muntu alina ebirabo n'obukugu obw'enjawulo okugabana. Minisitule zaffe ez'enjawulo ziwa emikisa gy'okukula mu mwoyo, okuweereza abalala, n'okuzimba enkolagana ez'omugaso mu maka ga kkanisa yaffe.",
      exploreButton: "Kebera Minisitule",
      spotlightTitle: "Ekyoleka Omwezi Guno",
      getInvolvedTitle: "Yingira Mu Minisitule",
      getInvolvedDescription: "Zuula ekifo kyo mu kkanisa yaffe ng'oyita mu mikisa gino egy'omugaso",
      ctaTitle: "Oli Mwetegefu Okwenyigira?",
      ctaDescription:
        "Obanga onoonya okuweereza, okuyiga, oba okukwatagana n'abalala, waliwo ekifo kyo mu minisitule zaffe. Tutuukirire okumanya ebisingawo ku ngeri gy'osobola okwenyigira n'okukola enjawulo.",
    },
  }

  const t = translations[language as keyof typeof translations]

  const ministries = [
    {
      id: 1,
      name: "Youth Ministry",
      slug: "youth-ministry",
      description:
        "Empowering young people to grow in faith, develop leadership skills, and make a positive impact in their communities through Bible study, fellowship, and service projects.",
      logo: "/AY.png",
      leader: "M.G. Jesse Kyambadde",
      leaderEmail: "youth@masakasda.org",
      leaderWhatsApp: "+256700000000",
      meetingTime: "Sabbath 2:00 PM",
      ageGroup: "Ages 13-30",
      category: "age-based",
      activities: ["Bible Study", "Community Service", "Youth Camps", "Leadership Training"],
      image: "/ministry-youth.png",
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: 2,
      name: "Children's Ministry",
      slug: "childrens-ministry",
      description:
        "Creating a nurturing environment where children can learn about God's love through age-appropriate Bible stories, songs, crafts, and interactive activities.",
      logo: "/children-min.png",
      leader: "Mrs. Joy B. Baluku",
      leaderEmail: "children@masakasda.org",
      leaderWhatsApp: "+256700000001",
      meetingTime: "Sabbath 09:30 AM",
      ageGroup: "Ages 0-12",
      category: "age-based",
      activities: ["Sabbath School", "Children's Church", "VBS", "Story Time"],
      image: "/ministry-children.png",
      color: "bg-green-100 text-green-800",
    },
    {
      id: 3,
      name: "Women's Ministry",
      slug: "womens-ministry",
      description:
        "Supporting women in their spiritual journey through fellowship, Bible study, prayer, and practical life skills while encouraging them to use their gifts in service.",
      logo: "/women.png",
      leader: "M.G. Evelyn Jumba",
      leaderEmail: "women@masakasda.org",
      leaderWhatsApp: "+256700000002",
      meetingTime: "First Sabbath 3:00 PM",
      ageGroup: "Adult Women",
      category: "demographic",
      activities: ["Bible Study", "Prayer Groups", "Health Seminars", "Community Outreach"],
      image: "/ministry-women.png",
      color: "bg-pink-100 text-pink-800",
    },
    {
      id: 4,
      name: "Men's Ministry",
      slug: "mens-ministry",
      description:
        "Encouraging men to be spiritual leaders in their homes and communities through Bible study, mentorship, and practical service opportunities.",
      logo: "/men.png",
      leader: "Eld. James Mukiibi",
      leaderEmail: "men@masakasda.org",
      leaderWhatsApp: "+256700000003",
      meetingTime: "Second Sabbath 3:00 PM",
      ageGroup: "Adult Men",
      category: "demographic",
      activities: ["Men's Breakfast", "Bible Study", "Community Projects", "Mentorship"],
      image: "/ministry-men.png",
      color: "bg-indigo-100 text-indigo-800",
    },
    {
      id: 5,
      name: "Music Ministry",
      slug: "music-ministry",
      description:
        "Leading the congregation in worship through inspiring music, developing musical talents, and using the gift of music to glorify God and touch hearts.",
      logo: "/music.png",
      leader: "M.G. Jesse Kyambadde",
      leaderEmail: "music@masakasda.org",
      leaderWhatsApp: "+256700000004",
      meetingTime: "Friday 7:00 PM",
      ageGroup: "All Ages",
      category: "service",
      activities: ["Choir Practice", "Instrumental Training", "Worship Leading", "Special Music"],
      image: "/ministry-music.png",
      color: "bg-purple-100 text-purple-800",
    },
    {
      id: 6,
      name: "Health Ministry",
      slug: "health-ministry",
      description:
        "Promoting physical, mental, and spiritual wellness through health education, cooking classes, fitness programs, and community health initiatives.",
      logo: "/health.png",
      leader: "Dr. Ruth Namukasa",
      leaderEmail: "health@masakasda.org",
      leaderWhatsApp: "+256700000005",
      meetingTime: "Third Sabbath 3:00 PM",
      ageGroup: "All Ages",
      category: "service",
      activities: ["Health Seminars", "Cooking Classes", "Fitness Programs", "Health Screenings"],
      image: "/ministry-health.png",
      color: "bg-emerald-100 text-emerald-800",
    },
    {
      id: 7,
      name: "Pathfinder Club",
      slug: "pathfinder-club",
      description:
        "Developing character and leadership in young people through outdoor activities, skill building, community service, and spiritual growth programs.",
      logo: "/pathfinder.png",
      leader: "Elder Isaac Musinguzi",
      leaderEmail: "pathfinders@masakasda.org",
      leaderWhatsApp: "+256700000006",
      meetingTime: "Sunday 2:00 PM",
      ageGroup: "Ages 10-15",
      category: "age-based",
      activities: ["Camping", "Honor Classes", "Community Service", "Leadership Training"],
      image: "/ministry-pathfinder.png",
      color: "bg-orange-100 text-orange-800",
    },
    {
      id: 8,
      name: "Community Outreach",
      slug: "community-outreach",
      description:
        "Serving our local community through practical assistance, evangelism, social programs, and meeting the physical and spiritual needs of our neighbors.",
      logo: "/community.png",
      leader: "Sister Agnes Nalwoga",
      leaderEmail: "outreach@masakasda.org",
      leaderWhatsApp: "+256700000007",
      meetingTime: "As Needed",
      ageGroup: "All Ages",
      category: "service",
      activities: ["Food Distribution", "Medical Clinics", "Evangelism", "Social Services"],
      image: "/ministry-outreach.png",
      color: "bg-teal-100 text-teal-800",
    },
  ]

  // Featured ministry of the month
  const featuredMinistry = ministries[0] // Youth Ministry as featured

  // Filter ministries by category
  const filteredMinistries =
    selectedCategory === "all" ? ministries : ministries.filter((m) => m.category === selectedCategory)

  return (
    <div className="lg:pr-[14.28%]">
      <section className="relative py-24 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(16, 185, 129, 0.9), rgba(5, 150, 105, 0.9)), url('/ministry-collage.jpg')",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <div className="absolute top-0 right-0">
            <Button
              variant="outline"
              size="sm"
              className="bg-white/20 text-white border-white/30 hover:bg-white/30"
              onClick={() => setLanguage(language === "en" ? "lg" : "en")}
            >
              <Globe className="h-4 w-4 mr-2" />
              {language === "en" ? "English" : "Luganda"}
            </Button>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">{t.title}</h1>
          <p className="text-2xl md:text-3xl mb-8 font-light">{t.subtitle}</p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">{t.description}</p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-6">
            {t.exploreButton}
          </Button>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-emerald-50 to-emerald-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="bg-emerald-600 text-white text-lg px-4 py-2 mb-4">Ministry Spotlight</Badge>
            <h2 className="text-3xl font-bold">{t.spotlightTitle}</h2>
          </div>
          <Card className="overflow-hidden shadow-2xl">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredMinistry.image || "/placeholder.svg"}
                  alt={featuredMinistry.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative h-10 w-10">
                    <Image
                      src={featuredMinistry.logo}
                      alt={`${featuredMinistry.name} logo`}
                      fill
                      className="object-contain"
                      sizes="40px"
                    />
                  </div>
                  <h3 className="text-3xl font-bold">{featuredMinistry.name}</h3>
                </div>
                <p className="text-muted-foreground mb-6 text-lg">{featuredMinistry.description}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="font-medium">Leader:</span>
                    <span className="text-muted-foreground">{featuredMinistry.leader}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Meets:</span>
                    <span className="text-muted-foreground">{featuredMinistry.meetingTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Age Group:</span>
                    <span className="text-muted-foreground">{featuredMinistry.ageGroup}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link href={`/ministries/${featuredMinistry.slug}`} className="flex-1">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Learn More</Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="flex-1 bg-transparent"
                    onClick={() => window.open(`https://wa.me/${featuredMinistry.leaderWhatsApp}`, "_blank")}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact Leader
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-8 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className={selectedCategory === "all" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
            >
              All Ministries
            </Button>
            <Button
              variant={selectedCategory === "age-based" ? "default" : "outline"}
              onClick={() => setSelectedCategory("age-based")}
              className={selectedCategory === "age-based" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
            >
              Age-Based
            </Button>
            <Button
              variant={selectedCategory === "demographic" ? "default" : "outline"}
              onClick={() => setSelectedCategory("demographic")}
              className={selectedCategory === "demographic" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
            >
              Demographic
            </Button>
            <Button
              variant={selectedCategory === "service" ? "default" : "outline"}
              onClick={() => setSelectedCategory("service")}
              className={selectedCategory === "service" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
            >
              Service-Based
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.getInvolvedTitle}</h2>
            <p className="text-muted-foreground text-lg">{t.getInvolvedDescription}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMinistries.map((ministry) => {
              return (
                <Card key={ministry.id} className="overflow-hidden hover:shadow-xl transition-all">
                  <div className="relative">
                    <img
                      src={ministry.image || "/placeholder.svg"}
                      alt={ministry.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className={ministry.color}>
                      <div className="relative h-4 w-4 mr-1">
                        <Image
                          src={ministry.logo}
                          alt=""
                          fill
                          className="object-contain"
                          sizes="16px"
                        />
                      </div>
                      {ministry.ageGroup}
                    </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white rounded-full p-3 shadow-lg">
                    <div className="relative h-8 w-8">
                      <Image
                        src={ministry.logo}
                        alt={`${ministry.name} logo`}
                        fill
                        className="object-contain"
                        sizes="32px"
                      />
                    </div>
                  </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">{ministry.name}</CardTitle>
                    <CardDescription className="line-clamp-3">{ministry.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="font-medium">Leader:</span>
                          <span className="text-muted-foreground">{ministry.leader}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Meets:</span>
                          <span className="text-muted-foreground">{ministry.meetingTime}</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm mb-2">Activities:</h4>
                        <div className="flex flex-wrap gap-1">
                          {ministry.activities.map((activity, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {activity}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2 pt-2">
                        <Link href={`/ministries/${ministry.slug}`}>
                          <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Learn More</Button>
                        </Link>
                        <div className="grid grid-cols-2 gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => (window.location.href = `mailto:${ministry.leaderEmail}`)}
                          >
                            <Mail className="h-4 w-4 mr-1" />
                            Email
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(`https://wa.me/${ministry.leaderWhatsApp}`, "_blank")}
                          >
                            <MessageCircle className="h-4 w-4 mr-1" />
                            WhatsApp
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.ctaTitle}</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">{t.ctaDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              Contact Ministry Leaders
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Visit This Sabbath
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
