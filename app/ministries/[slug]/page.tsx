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
  Calendar,
  MapPin,
  Mail,
  Phone,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from 'next'

// Add the generateMetadata function here
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const ministry = ministriesData[params.slug as keyof typeof ministriesData]
  
  if (!ministry) {
    return {
      title: 'Ministry Not Found - @SDAMTC'
    }
  }

  return {
    title: `${ministry.name} - @SDAMTC`,
    description: ministry.description,
  }
}

const ministriesData = {
  "youth-ministry": {
    name: "Youth Ministry",
    description:
      "Empowering young people to grow in faith, develop leadership skills, and make a positive impact in their communities.",
    icon: Users,
    leader: "M.G. Jesse Kyambadde",
    leaderEmail: "youth@sdamtc.org",
    leaderPhone: "+256 700 000 001",
    meetingTime: "Sabbath 2:00 PM",
    meetingLocation: "Youth Hall, Church Premises",
    ageGroup: "Ages 13-30",
    color: "bg-blue-100 text-blue-800",
    image: "/ministry-youth.png",
    fullDescription: `The Youth Ministry at Masaka Town SDA Church is dedicated to nurturing the spiritual, social, and personal development of young people. We believe that youth are not just the church of tomorrow, but the church of today, and we provide opportunities for them to actively participate in church life and community service.

Our ministry focuses on creating a safe and welcoming environment where young people can explore their faith, ask questions, and develop a personal relationship with Jesus Christ. Through engaging Bible studies, dynamic worship experiences, and meaningful fellowship, we help youth build a strong foundation for their spiritual journey.`,
    vision:
      "To raise a generation of young people who are passionate about God, committed to service, and equipped to be leaders in their communities and the world.",
    activities: [
      {
        name: "Weekly Bible Study",
        description: "Interactive Bible studies exploring relevant topics for young people",
        schedule: "Every Sabbath at 2:00 PM",
      },
      {
        name: "Youth Camps",
        description: "Annual camping experiences with spiritual growth, outdoor activities, and fellowship",
        schedule: "Twice yearly (April & December)",
      },
      {
        name: "Community Service",
        description: "Regular outreach projects serving the local community",
        schedule: "Monthly on first Sunday",
      },
      {
        name: "Leadership Training",
        description: "Workshops and seminars developing leadership and life skills",
        schedule: "Quarterly",
      },
      {
        name: "Music & Worship",
        description: "Youth choir and praise team leading worship services",
        schedule: "Practice every Wednesday at 6:00 PM",
      },
    ],
    testimonials: [
      {
        name: "Sarah M.",
        text: "The Youth Ministry has been instrumental in my spiritual growth. I've found lifelong friends and mentors who genuinely care about my journey with God.",
      },
      {
        name: "David K.",
        text: "Through the leadership training programs, I've discovered my gifts and learned how to use them to serve others. This ministry changed my life!",
      },
    ],
    howToJoin:
      "Simply show up at any of our Sabbath meetings at 2:00 PM in the Youth Hall. You can also contact our youth leader for more information about upcoming events and activities.",
  },
  "childrens-ministry": {
    name: "Children's Ministry",
    description:
      "Creating a nurturing environment where children can learn about God's love through age-appropriate activities.",
    icon: Baby,
    leader: "Mrs. Joy B. Baluku",
    leaderEmail: "children@sdamtc.org",
    leaderPhone: "+256 700 000 002",
    meetingTime: "Sabbath 09:30 AM",
    meetingLocation: "Children's Wing, Church Premises",
    ageGroup: "Ages 0-12",
    color: "bg-green-100 text-green-800",
    image: "/ministry-children.png",
    fullDescription: `The Children's Ministry at Masaka Town SDA Church is committed to partnering with parents to nurture children in their faith journey. We provide a safe, loving, and fun environment where children can learn about Jesus and develop a personal relationship with Him.

Our programs are designed to be age-appropriate, engaging, and biblically sound. Through stories, songs, crafts, games, and interactive activities, we help children understand God's love and learn how to apply biblical principles in their daily lives.`,
    vision: "To help every child know Jesus personally, grow in their faith, and develop a heart for serving others.",
    activities: [
      {
        name: "Sabbath School",
        description: "Age-graded classes with Bible stories, memory verses, and interactive lessons",
        schedule: "Every Sabbath at 9:30 AM",
      },
      {
        name: "Children's Church",
        description: "Child-friendly worship service during main church service",
        schedule: "Every Sabbath at 11:00 AM",
      },
      {
        name: "Vacation Bible School (VBS)",
        description: "Week-long summer program with Bible stories, crafts, games, and music",
        schedule: "Annually in August",
      },
      {
        name: "Story Time",
        description: "Special storytelling sessions with biblical and character-building stories",
        schedule: "Second Sabbath at 3:00 PM",
      },
      {
        name: "Children's Choir",
        description: "Fun singing group for children to learn worship songs",
        schedule: "Practice every Friday at 5:00 PM",
      },
    ],
    testimonials: [
      {
        name: "Mrs. Nakato (Parent)",
        text: "My children love coming to church! The teachers are caring and creative, and I can see my kids growing in their understanding of God's love.",
      },
      {
        name: "Mr. Ssemakula (Parent)",
        text: "The Children's Ministry has been a blessing to our family. Our daughter memorizes Bible verses and shares what she learns at home.",
      },
    ],
    howToJoin:
      "Bring your children to the Children's Wing on Sabbath morning at 9:30 AM. Our friendly volunteers will welcome them and guide them to their age-appropriate class. Parents are welcome to visit and observe.",
  },
  "womens-ministry": {
    name: "Women's Ministry",
    description:
      "Supporting women in their spiritual journey through fellowship, Bible study, and practical life skills.",
    icon: Heart,
    leader: "M.G. Evelyn Jumba",
    leaderEmail: "women@sdamtc.org",
    leaderPhone: "+256 700 000 003",
    meetingTime: "First Sabbath 3:00 PM",
    meetingLocation: "Fellowship Hall, Church Premises",
    ageGroup: "Adult Women",
    color: "bg-pink-100 text-pink-800",
    image: "/ministry-women.png",
    fullDescription: `The Women's Ministry at Masaka Town SDA Church exists to encourage, equip, and empower women to grow in their relationship with Christ and to use their God-given gifts in service to others. We provide a supportive community where women can connect, learn, and grow together.

Our ministry recognizes the unique challenges and opportunities that women face in today's world. Through Bible studies, prayer groups, workshops, and fellowship activities, we help women develop spiritually, emotionally, and practically while building meaningful relationships with other women in the church.`,
    vision:
      "To create a community of women who are growing in Christ, supporting one another, and making a positive impact in their families, church, and community.",
    activities: [
      {
        name: "Monthly Fellowship",
        description: "Gathering for worship, Bible study, and fellowship",
        schedule: "First Sabbath at 3:00 PM",
      },
      {
        name: "Prayer Groups",
        description: "Small groups meeting for prayer and mutual support",
        schedule: "Weekly on Tuesday evenings",
      },
      {
        name: "Health & Wellness Seminars",
        description: "Workshops on physical, mental, and spiritual health topics",
        schedule: "Quarterly",
      },
      {
        name: "Community Outreach",
        description: "Service projects helping women and families in need",
        schedule: "Monthly",
      },
      {
        name: "Women's Retreat",
        description: "Annual weekend retreat for spiritual renewal and fellowship",
        schedule: "Annually in March",
      },
    ],
    testimonials: [
      {
        name: "Grace M.",
        text: "The Women's Ministry has given me a spiritual family. The prayer support and encouragement I receive here have strengthened my faith immensely.",
      },
      {
        name: "Rebecca N.",
        text: "I've learned so much about health, parenting, and spiritual growth through the seminars and workshops. This ministry is truly a blessing!",
      },
    ],
    howToJoin:
      "Join us on the first Sabbath of each month at 3:00 PM in the Fellowship Hall. All women are welcome! You can also contact our ministry leader to learn about prayer groups and other activities.",
  },
  "mens-ministry": {
    name: "Men's Ministry",
    description: "Encouraging men to be spiritual leaders through Bible study, mentorship, and service.",
    icon: UserCheck,
    leader: "Eld. James Mukiibi",
    leaderEmail: "men@sdamtc.org",
    leaderPhone: "+256 700 000 004",
    meetingTime: "Second Sabbath 3:00 PM",
    meetingLocation: "Men's Fellowship Room, Church Premises",
    ageGroup: "Adult Men",
    color: "bg-indigo-100 text-indigo-800",
    image: "/ministry-men.png",
    fullDescription: `The Men's Ministry at Masaka Town SDA Church is dedicated to helping men grow in their faith and become godly leaders in their homes, church, and community. We provide opportunities for men to connect with other men, study God's Word, and develop practical skills for Christian living.

Our ministry recognizes that men face unique challenges and pressures in today's world. Through Bible studies, mentorship programs, service projects, and fellowship activities, we help men build strong relationships with God and with each other while developing the character and skills needed to be effective spiritual leaders.`,
    vision:
      "To develop men of integrity who are committed to Christ, strong in their families, and active in serving their church and community.",
    activities: [
      {
        name: "Men's Fellowship",
        description: "Monthly gathering for worship, Bible study, and discussion",
        schedule: "Second Sabbath at 3:00 PM",
      },
      {
        name: "Men's Breakfast",
        description: "Quarterly breakfast meetings with guest speakers and fellowship",
        schedule: "Quarterly on Saturday morning",
      },
      {
        name: "Bible Study Groups",
        description: "Small groups studying Scripture and applying it to daily life",
        schedule: "Weekly on Thursday evenings",
      },
      {
        name: "Community Projects",
        description: "Hands-on service projects helping church members and community",
        schedule: "Monthly",
      },
      {
        name: "Mentorship Program",
        description: "Pairing experienced men with younger men for guidance and support",
        schedule: "Ongoing",
      },
    ],
    testimonials: [
      {
        name: "John M.",
        text: "The Men's Ministry has helped me become a better husband and father. The mentorship and accountability I've found here are invaluable.",
      },
      {
        name: "Peter K.",
        text: "I appreciate the practical approach to faith. We don't just talk about being godly men—we actively work on it together through service and study.",
      },
    ],
    howToJoin:
      "Attend our monthly fellowship on the second Sabbath at 3:00 PM. All men are welcome! Contact our ministry leader to learn about Bible study groups and mentorship opportunities.",
  },
  "music-ministry": {
    name: "Music Ministry",
    description: "Leading worship through inspiring music and developing musical talents to glorify God.",
    icon: Music,
    leader: "M.G. Jesse Kyambadde",
    leaderEmail: "music@sdamtc.org",
    leaderPhone: "+256 700 000 005",
    meetingTime: "Wednesday 6:00 PM",
    meetingLocation: "Church Sanctuary",
    ageGroup: "All Ages",
    color: "bg-purple-100 text-purple-800",
    image: "/ministry-music.png",
    fullDescription: `The Music Ministry at Masaka Town SDA Church is committed to using the gift of music to worship God, inspire hearts, and draw people closer to Jesus. We believe that music is a powerful tool for worship and evangelism, and we strive for excellence in all our musical presentations.

Our ministry provides opportunities for people of all ages and skill levels to use their musical talents in service to God. Whether you're an experienced musician or just beginning, there's a place for you in our music ministry. We offer training, mentorship, and performance opportunities in various musical groups.`,
    vision:
      "To create a culture of worship through music that honors God, edifies the church, and reaches the community with the message of God's love.",
    activities: [
      {
        name: "Choir Practice",
        description: "Weekly rehearsals for the church choir",
        schedule: "Every Wednesday at 6:00 PM",
      },
      {
        name: "Instrumental Training",
        description: "Lessons for piano, guitar, drums, and other instruments",
        schedule: "By appointment",
      },
      {
        name: "Worship Team",
        description: "Contemporary worship band leading praise and worship",
        schedule: "Practice every Friday at 6:00 PM",
      },
      {
        name: "Special Music",
        description: "Solo and small group performances during services",
        schedule: "As scheduled",
      },
      {
        name: "Music Workshops",
        description: "Training sessions on vocal techniques, music theory, and worship leading",
        schedule: "Quarterly",
      },
    ],
    testimonials: [
      {
        name: "Mary L.",
        text: "Singing in the choir has deepened my worship experience. The music ministry has helped me use my voice to glorify God and bless others.",
      },
      {
        name: "Samuel T.",
        text: "I've grown so much as a musician through the training and opportunities provided by the music ministry. It's a joy to serve God through music!",
      },
    ],
    howToJoin:
      "Come to choir practice on Wednesday at 6:00 PM or contact our music director to discuss how you can get involved. All musical talents and skill levels are welcome!",
  },
  "health-ministry": {
    name: "Health Ministry",
    description:
      "Promoting physical, mental, and spiritual wellness through education and community health initiatives.",
    icon: Stethoscope,
    leader: "Dr. Ruth Namukasa",
    leaderEmail: "health@sdamtc.org",
    leaderPhone: "+256 700 000 006",
    meetingTime: "Third Sabbath 3:00 PM",
    meetingLocation: "Health Center, Church Premises",
    ageGroup: "All Ages",
    color: "bg-emerald-100 text-emerald-800",
    image: "/ministry-health.png",
    fullDescription: `The Health Ministry at Masaka Town SDA Church is dedicated to promoting whole-person wellness—physical, mental, emotional, and spiritual. We believe that our bodies are temples of the Holy Spirit, and we're committed to helping people make healthy lifestyle choices that honor God.

Our ministry provides education, resources, and support to help individuals and families achieve optimal health. Through seminars, cooking classes, fitness programs, and health screenings, we empower people to take charge of their health and experience the abundant life that God intends for them.`,
    vision:
      "To create a healthy church community where people are equipped and motivated to make lifestyle choices that promote wellness and glorify God.",
    activities: [
      {
        name: "Health Seminars",
        description: "Educational presentations on nutrition, disease prevention, and healthy living",
        schedule: "Third Sabbath at 3:00 PM",
      },
      {
        name: "Cooking Classes",
        description: "Hands-on classes teaching healthy, plant-based cooking",
        schedule: "Monthly on Sunday afternoon",
      },
      {
        name: "Fitness Programs",
        description: "Group exercise classes including walking clubs and aerobics",
        schedule: "Tuesday and Thursday mornings",
      },
      {
        name: "Health Screenings",
        description: "Free health checks including blood pressure, glucose, and BMI",
        schedule: "Quarterly",
      },
      {
        name: "Community Health Fairs",
        description: "Large-scale events offering health education and services to the community",
        schedule: "Twice yearly",
      },
    ],
    testimonials: [
      {
        name: "Joseph M.",
        text: "The health ministry helped me make lifestyle changes that reversed my pre-diabetes. I'm grateful for the education and support I received!",
      },
      {
        name: "Agnes K.",
        text: "The cooking classes have transformed how my family eats. We're healthier and feel better, and the recipes are delicious!",
      },
    ],
    howToJoin:
      "Attend our monthly health seminar on the third Sabbath at 3:00 PM, or join one of our fitness programs. Contact our health ministry leader for more information about upcoming classes and events.",
  },
  "pathfinder-club": {
    name: "Pathfinder Club",
    description: "Developing character and leadership in young people through outdoor activities and spiritual growth.",
    icon: TreePine,
    leader: "Elder Isaac Musinguzi",
    leaderEmail: "pathfinders@sdamtc.org",
    leaderPhone: "+256 700 000 007",
    meetingTime: "Sunday 2:00 PM",
    meetingLocation: "Pathfinder Hall, Church Premises",
    ageGroup: "Ages 10-15",
    color: "bg-orange-100 text-orange-800",
    image: "/ministry-pathfinder.png",
    fullDescription: `The Pathfinder Club at Masaka Town SDA Church is a dynamic youth organization that combines outdoor adventure, skill development, and spiritual growth. Pathfinders learn valuable life skills, develop leadership abilities, and build character while having fun and making lasting friendships.

Our club follows the international Pathfinder curriculum, which includes honor classes, camping skills, community service, and spiritual activities. Pathfinders work toward achieving various honors and awards while learning about God's creation and developing a personal relationship with Jesus Christ.`,
    vision:
      "To help young people discover their potential, develop their talents, and dedicate their lives to serving God and others.",
    activities: [
      {
        name: "Weekly Club Meetings",
        description: "Structured meetings with drills, honor classes, and activities",
        schedule: "Every Sunday at 2:00 PM",
      },
      {
        name: "Camping Trips",
        description: "Outdoor camping experiences teaching survival skills and teamwork",
        schedule: "Quarterly",
      },
      {
        name: "Honor Classes",
        description: "Skill-building classes in various areas (nature, arts, vocational, etc.)",
        schedule: "Ongoing during meetings",
      },
      {
        name: "Community Service",
        description: "Service projects helping the local community",
        schedule: "Monthly",
      },
      {
        name: "Pathfinder Camporee",
        description: "Regional gathering with other Pathfinder clubs for competitions and fellowship",
        schedule: "Annually",
      },
    ],
    testimonials: [
      {
        name: "Daniel S. (Pathfinder)",
        text: "Pathfinders has taught me so many skills! I've learned camping, first aid, and leadership. It's the highlight of my week!",
      },
      {
        name: "Mrs. Nambi (Parent)",
        text: "I've seen tremendous growth in my son since he joined Pathfinders. He's more confident, responsible, and committed to his faith.",
      },
    ],
    howToJoin:
      "Registration is open for youth ages 10-15. Come to a club meeting on Sunday at 2:00 PM to observe, or contact our club director for registration information and requirements.",
  },
  "community-outreach": {
    name: "Community Outreach",
    description: "Serving our local community through practical assistance and meeting physical and spiritual needs.",
    icon: HandHeart,
    leader: "Sister Agnes Nalwoga",
    leaderEmail: "outreach@sdamtc.org",
    leaderPhone: "+256 700 000 008",
    meetingTime: "As Needed",
    meetingLocation: "Various Community Locations",
    ageGroup: "All Ages",
    color: "bg-teal-100 text-teal-800",
    image: "/ministry-outreach.png",
    fullDescription: `The Community Outreach Ministry at Masaka Town SDA Church is committed to demonstrating God's love through practical service to our neighbors. We believe that faith without works is dead, and we actively seek opportunities to meet the physical, emotional, and spiritual needs of people in our community.

Our ministry coordinates various outreach programs that address real needs in our community. From food distribution to medical clinics, from evangelistic campaigns to social services, we strive to be the hands and feet of Jesus, showing His love through tangible acts of service.`,
    vision:
      "To be a church that is known in the community for its compassion, generosity, and commitment to serving those in need.",
    activities: [
      {
        name: "Food Distribution",
        description: "Monthly food bank providing groceries to families in need",
        schedule: "Last Sunday of each month",
      },
      {
        name: "Medical Clinics",
        description: "Free medical services and health education for the community",
        schedule: "Quarterly",
      },
      {
        name: "Evangelistic Programs",
        description: "Public evangelistic meetings sharing the gospel message",
        schedule: "Twice yearly",
      },
      {
        name: "Prison Ministry",
        description: "Visiting local prisons to share hope and provide spiritual support",
        schedule: "Monthly",
      },
      {
        name: "Disaster Relief",
        description: "Emergency response to natural disasters and community crises",
        schedule: "As needed",
      },
    ],
    testimonials: [
      {
        name: "Community Member",
        text: "The food distribution program has been a lifeline for my family during difficult times. The church members are so kind and caring.",
      },
      {
        name: "Michael O. (Volunteer)",
        text: "Serving in community outreach has changed my life. There's nothing more fulfilling than being able to help someone in need.",
      },
    ],
    howToJoin:
      "Volunteers are always needed! Contact our outreach coordinator to learn about upcoming projects and how you can get involved. There are opportunities for people of all ages and abilities to serve.",
  },
}


export default function MinistryDetailPage({ params }: { params: { slug: string } }) {
  const ministry = ministriesData[params.slug as keyof typeof ministriesData]

  if (!ministry) {
    notFound()
  }

  const IconComponent = ministry.icon

  return (
    <div className="lg:pr-[14.28%]">
      {/* Back Button */}
      <div className="px-4 pt-4">
        <Link href="/ministries">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Ministries
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-to-br from-emerald-400 to-emerald-500 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <IconComponent className="h-12 w-12" />
            </div>
            <div>
              <Badge className="mb-2 bg-white/20 text-white border-white/30">{ministry.ageGroup}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold">{ministry.name}</h1>
            </div>
          </div>
          <p className="text-xl opacity-90 max-w-3xl">{ministry.description}</p>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5 text-emerald-400" />
                Meeting Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{ministry.meetingTime}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <MapPin className="h-5 w-5 text-emerald-400" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{ministry.meetingLocation}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-emerald-400" />
                Ministry Leader
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">{ministry.leader}</p>
              <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href={`mailto:${ministry.leaderEmail}`} className="hover:text-emerald-400 transition-colors">
                    {ministry.leaderEmail}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href={`tel:${ministry.leaderPhone}`} className="hover:text-emerald-400 transition-colors">
                    {ministry.leaderPhone}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About This Ministry</h2>
          <div className="prose prose-lg max-w-none">
            {ministry.fullDescription.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <Card className="mt-8 bg-emerald-50 border-emerald-200">
            <CardHeader>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground italic">{ministry.vision}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Activities & Programs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {ministry.activities.map((activity, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{activity.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-emerald-600">
                    <Calendar className="h-4 w-4" />
                    {activity.schedule}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What People Are Saying</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {ministry.testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-emerald-50 to-white">
                <CardContent className="pt-6">
                  <p className="text-lg italic mb-4 text-muted-foreground">"{testimonial.text}"</p>
                  <p className="font-semibold text-emerald-600">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-emerald-400 to-emerald-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Involved?</h2>
          <p className="text-xl mb-8 opacity-90">{ministry.howToJoin}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href={`mailto:${ministry.leaderEmail}`}>
                <Mail className="mr-2 h-5 w-5" />
                Contact Ministry Leader
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              asChild
            >
              <a href={`tel:${ministry.leaderPhone}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
