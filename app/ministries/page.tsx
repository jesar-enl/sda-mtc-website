import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, Music, Stethoscope, TreePine, Baby, UserCheck, HandHeart } from "lucide-react"

export default function MinistriesPage() {
  const ministries = [
    {
      id: 1,
      name: "Youth Ministry",
      description:
        "Empowering young people to grow in faith, develop leadership skills, and make a positive impact in their communities through Bible study, fellowship, and service projects.",
      icon: Users,
      leader: "M.G. Jesse Kyambadde",
      meetingTime: "Sabbath 2:00 PM",
      ageGroup: "Ages 13-30",
      activities: ["Bible Study", "Community Service", "Youth Camps", "Leadership Training"],
      image: "/ministry-youth.png",
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: 2,
      name: "Children's Ministry",
      description:
        "Creating a nurturing environment where children can learn about God's love through age-appropriate Bible stories, songs, crafts, and interactive activities.",
      icon: Baby,
      leader: "Mrs. Joy B. Baluku",
      meetingTime: "Sabbath 09:30 AM",
      ageGroup: "Ages 0-12",
      activities: ["Sabbath School", "Children's Church", "VBS", "Story Time"],
      image: "/ministry-children.png",
      color: "bg-green-100 text-green-800",
    },
    {
      id: 3,
      name: "Women's Ministry",
      description:
        "Supporting women in their spiritual journey through fellowship, Bible study, prayer, and practical life skills while encouraging them to use their gifts in service.",
      icon: Heart,
      leader: "M.G. Evelyn Jumba",
      meetingTime: "First Sabbath 3:00 PM",
      ageGroup: "Adult Women",
      activities: ["Bible Study", "Prayer Groups", "Health Seminars", "Community Outreach"],
      image: "/ministry-women.png",
      color: "bg-pink-100 text-pink-800",
    },
    {
      id: 4,
      name: "Men's Ministry",
      description:
        "Encouraging men to be spiritual leaders in their homes and communities through Bible study, mentorship, and practical service opportunities.",
      icon: UserCheck,
      leader: "Eld. James Mukiibi",
      meetingTime: "Second Sabbath 3:00 PM",
      ageGroup: "Adult Men",
      activities: ["Men's Breakfast", "Bible Study", "Community Projects", "Mentorship"],
      image: "/ministry-men.png",
      color: "bg-indigo-100 text-indigo-800",
    },
    {
      id: 5,
      name: "Music Ministry",
      description:
        "Leading the congregation in worship through inspiring music, developing musical talents, and using the gift of music to glorify God and touch hearts.",
      icon: Music,
      leader: "M.G. Jesse Kyambadde",
      meetingTime: "Wednesday 6:00 PM",
      ageGroup: "All Ages",
      activities: ["Choir Practice", "Instrumental Training", "Worship Leading", "Special Music"],
      image: "/ministry-music.png",
      color: "bg-purple-100 text-purple-800",
    },
    {
      id: 6,
      name: "Health Ministry",
      description:
        "Promoting physical, mental, and spiritual wellness through health education, cooking classes, fitness programs, and community health initiatives.",
      icon: Stethoscope,
      leader: "Dr. Ruth Namukasa",
      meetingTime: "Third Sabbath 3:00 PM",
      ageGroup: "All Ages",
      activities: ["Health Seminars", "Cooking Classes", "Fitness Programs", "Health Screenings"],
      image: "/ministry-health.png",
      color: "bg-emerald-100 text-emerald-800",
    },
    {
      id: 7,
      name: "Pathfinder Club",
      description:
        "Developing character and leadership in young people through outdoor activities, skill building, community service, and spiritual growth programs.",
      icon: TreePine,
      leader: "Elder Isaac Musinguzi",
      meetingTime: "Sunday 2:00 PM",
      ageGroup: "Ages 10-15",
      activities: ["Camping", "Honor Classes", "Community Service", "Leadership Training"],
      image: "/ministry-pathfinder.png",
      color: "bg-orange-100 text-orange-800",
    },
    {
      id: 8,
      name: "Community Outreach",
      description:
        "Serving our local community through practical assistance, evangelism, social programs, and meeting the physical and spiritual needs of our neighbors.",
      icon: HandHeart,
      leader: "Sister Agnes Nalwoga",
      meetingTime: "As Needed",
      ageGroup: "All Ages",
      activities: ["Food Distribution", "Medical Clinics", "Evangelism", "Social Services"],
      image: "/ministry-outreach.png",
      color: "bg-teal-100 text-teal-800",
    },
  ]

  return (
    <div className="lg:pr-[14.28%]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-bl from-emerald-400 to-emerald-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Ministries</h1>
          <p className="text-xl opacity-90">
            Discover opportunities to grow, serve, and connect with others in our church family
          </p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Involved</h2>
            <p className="text-muted-foreground text-lg">
              Find your place in our church community through these meaningful ministry opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry) => {
              const IconComponent = ministry.icon
              return (
                <Card key={ministry.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={ministry.image || "/placeholder.svg"}
                      alt={ministry.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className={ministry.color}>
                        <IconComponent className="h-4 w-4 mr-1" />
                        {ministry.ageGroup}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <IconComponent className="h-5 w-5 text-emerald-400" />
                      {ministry.name}
                    </CardTitle>
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

                      <Button className="w-full bg-emerald-400 hover:bg-emerald-500">Learn More</Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Involved?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Whether you're looking to serve, learn, or connect with others, there's a place for you in our ministries.
            Contact us to learn more about how you can get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-400 hover:bg-emerald-500">
              Contact Ministry Leaders
            </Button>
            <Button size="lg" variant="outline">
              Visit This Sabbath
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
