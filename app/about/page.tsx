import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Book, Globe, ExternalLink, MapPin, Clock, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Meet Our Community",
  description:
    "A vibrant, English-speaking SDA church family in the heart of Masaka City, serving students, internationals and families at large",
  openGraph: {
    title: "About Us - Seventh-day Adventist Church Masaka Town",
    description:
      "A vibrant, English-speaking SDA church family in the heart of Masaka City, serving students, internationals and families at large",
  },
}

export default function AboutPage() {
  return (
    <div className="lg:pr-[14.28%]">
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/community-worship.jpg"
            alt="Church community worshiping together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D5A87]/95 to-[#1e3a5f]/80" />
        </div>
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">Meet Our Community</h1>
            <p className="text-xl md:text-2xl opacity-90">
              A vibrant, English-speaking SDA church family in the heart of Masaka City
            </p>
            <p className="text-lg opacity-80">Serving students, internationals, and families at large since 2006</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-white to-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
            <div className="mx-auto md:mx-0">
              <img
                src="/pastor-ian-sendegeya.jpg"
                alt="Pastor Ian Sendegeya"
                className="w-64 h-64 rounded-lg shadow-xl object-cover"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">Welcome from Our Pastor</h2>
                <p className="text-muted-foreground">Pastor Ian Sendegeya</p>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>Dear Friends,</p>
                <p>
                  It is with great joy that I welcome you to Seventh-day Adventist Church Masaka Town. Whether you're a
                  student far from home, an international worker seeking fellowship, or a family looking for a spiritual
                  community, you have found a place where you belong.
                </p>
                <p>
                  Since our founding in 2006, we have been blessed to serve as a bridge for those who needed an
                  English-speaking congregation in this beautiful region. Our church is more than a building—it's a
                  family united by our love for Jesus Christ and our anticipation of His soon return.
                </p>
                <p>
                  I invite you to join us this Sabbath. Come experience the warmth of our fellowship, the power of
                  worship, and the truth of God's Word. Together, we are preparing for eternity.
                </p>
                <p className="font-semibold">
                  In Christ's Service,
                  <br />
                  Pastor Ian Sendegeya
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Church History */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our History</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Seventh-day Adventist Church Masaka Town was established in 2006 to serve the growing community of
                  internationals and students who could not be adequately served in the Luganda-speaking congregations
                  in the region. As an English-speaking congregation, we filled a vital need for those seeking worship
                  and fellowship in English.
                </p>
                <p>
                  What began as a small group of believers from diverse backgrounds has grown into a vibrant,
                  multicultural community of faith. Our church has become a spiritual home for students from various
                  universities, international workers, and English-speaking families in the Masaka area.
                </p>
                <p>
                  Today, we continue to grow as a family of faith, welcoming all who seek to know Jesus Christ and
                  prepare for His soon return. Our unique position as an English-speaking congregation allows us to
                  serve a diverse community while maintaining our commitment to biblical truth and Christian fellowship.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src="/church-history.png" alt="Historical church building" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Local Impact</h2>
            <p className="text-muted-foreground text-lg">Lives transformed by God's grace in our community</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-[#2D5A87]">
              <CardHeader>
                <CardTitle>Sarah Namukasa</CardTitle>
                <CardDescription>University Student</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic mb-4">
                  "As an international student, finding this church was a blessing. The English services made me feel at
                  home, and the youth ministry helped me grow spiritually during my university years. I found not just a
                  church, but a family."
                </p>
                <Badge variant="outline">Youth Ministry</Badge>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#2D5A87]">
              <CardHeader>
                <CardTitle>David Ochieng</CardTitle>
                <CardDescription>Young Professional</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic mb-4">
                  "The community outreach programs opened my eyes to serving others. Through this church, I discovered
                  my calling to help the less fortunate. The love and support here is genuine and life-changing."
                </p>
                <Badge variant="outline">Community Outreach</Badge>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#2D5A87]">
              <CardHeader>
                <CardTitle>Grace Akinyi</CardTitle>
                <CardDescription>International Worker</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic mb-4">
                  "Moving to Uganda for work was challenging, but this church became my anchor. The diverse congregation
                  and English worship services helped me integrate while maintaining my spiritual growth. I'm grateful
                  for this community."
                </p>
                <Badge variant="outline">International Fellowship</Badge>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#2D5A87]">
              <CardHeader>
                <CardTitle>Emmanuel Ssemakula</CardTitle>
                <CardDescription>Student Leader</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic mb-4">
                  "The youth programs here shaped my leadership skills and deepened my faith. I learned to serve, to
                  lead with humility, and to put God first. This church invested in me, and now I'm investing in
                  others."
                </p>
                <Badge variant="outline">Youth Leadership</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Youth & Student Voices</h2>
            <p className="text-muted-foreground text-lg">The next generation leading with faith and purpose</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <img
                src="/youth-leader-1.jpg"
                alt="Youth leader"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-center mb-2">Jesse Kyambadde</h3>
              <p className="text-sm text-center text-muted-foreground mb-3">Young Adult Leader</p>
              <p className="text-sm text-muted-foreground italic">
                "Our youth ministry is where I found my purpose. We're not just the church of tomorrow—we're active
                today, serving and growing together."
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <img
                src="/student-voice-2.jpg"
                alt="Student voice"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-center mb-2">Mercy Nakato</h3>
              <p className="text-sm text-center text-muted-foreground mb-3">University Student</p>
              <p className="text-sm text-muted-foreground italic">
                "The student fellowship here is amazing. We study together, pray together, and support each other
                through university challenges."
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <img
                src="/pathfinder-leader.jpg"
                alt="Pathfinder leader"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-center mb-2">Samuel Okello</h3>
              <p className="text-sm text-center text-muted-foreground mb-3">Pathfinder Leader</p>
              <p className="text-sm text-muted-foreground italic">
                "Pathfinders taught me leadership, service, and adventure. Now I'm helping younger kids discover their
                potential in Christ."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Beliefs */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Foundation</h2>
            <p className="text-muted-foreground text-lg">The principles that guide our church community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-[#2D5A87] text-white rounded-full w-fit">
                  <Heart className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To make disciples of Jesus Christ who live as His loving witnesses and proclaim to all people the
                  everlasting gospel of the Three Angels' Messages in preparation for His soon return.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-[#2D5A87] text-white rounded-full w-fit">
                  <Globe className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be a Christ-centered, English-speaking community that transforms lives through the power of the
                  Gospel, serving internationals, students, and families in Masaka Town and surrounding regions.
                </p>
              </CardContent>
            </Card>

            {/* Beliefs */}
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-[#2D5A87] text-white rounded-full w-fit">
                  <Book className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">Our Beliefs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We hold to the 28 Fundamental Beliefs of the Seventh-day Adventist Church, anchored in Scripture and
                  centered on salvation by grace through faith in Jesus Christ.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Our Foundation</h2>
            <p className="text-muted-foreground">Click to learn more about our beliefs and leadership</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="#beliefs-section">
              <Card className="cursor-pointer hover:shadow-xl transition-all hover:scale-105 h-full border-2 border-transparent hover:border-[#2D5A87]">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-[#2D5A87] text-white rounded-full w-fit">
                    <Book className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl text-center">28 Fundamental Beliefs</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Discover the biblical truths that guide our faith and practice
                  </p>
                  <Button variant="outline" className="group bg-transparent">
                    Explore Beliefs
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="#leadership-section">
              <Card className="cursor-pointer hover:shadow-xl transition-all hover:scale-105 h-full border-2 border-transparent hover:border-[#2D5A87]">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-[#2D5A87] text-white rounded-full w-fit">
                    <Heart className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl text-center">Our Leadership Team</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">Meet the dedicated servants shepherding our congregation</p>
                  <Button variant="outline" className="group bg-transparent">
                    Meet Our Leaders
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Beliefs Details */}
      <section id="beliefs-section" className="py-16 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">28 Fundamental Beliefs</h2>
            <p className="text-muted-foreground mb-6">
              The Seventh-day Adventist Church accepts the Bible as its only creed and holds certain fundamental beliefs
              to be the teaching of the Holy Scriptures.
            </p>
            <Button asChild className="bg-[#2D5A87] hover:bg-[#1e3a5f]">
              <a
                href="https://www.adventist.org/beliefs/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                View Complete Beliefs <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-[#2D5A87] mb-4">The Godhead</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge className="bg-[#2D5A87] text-white mt-1 min-w-[24px] justify-center">1</Badge>
                  <div>
                    <h4 className="font-semibold text-sm">Holy Scriptures</h4>
                    <p className="text-xs text-muted-foreground">The Bible is God's authoritative revelation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-[#2D5A87] text-white mt-1 min-w-[24px] justify-center">2</Badge>
                  <div>
                    <h4 className="font-semibold text-sm">Trinity</h4>
                    <p className="text-xs text-muted-foreground">One God: Father, Son, and Holy Spirit</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-[#2D5A87] text-white mt-1 min-w-[24px] justify-center">3</Badge>
                  <div>
                    <h4 className="font-semibold text-sm">God the Father</h4>
                    <p className="text-xs text-muted-foreground">Creator, Source, Sustainer, and Sovereign</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-[#2D5A87] text-white mt-1 min-w-[24px] justify-center">4</Badge>
                  <div>
                    <h4 className="font-semibold text-sm">God the Son</h4>
                    <p className="text-xs text-muted-foreground">Jesus Christ, fully God and fully human</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-[#2D5A87] text-white mt-1 min-w-[24px] justify-center">5</Badge>
                  <div>
                    <h4 className="font-semibold text-sm">God the Holy Spirit</h4>
                    <p className="text-xs text-muted-foreground">Active in creation, revelation, and redemption</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg text-[#2D5A87] mb-4">Salvation & Christian Life</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge className="bg-[#2D5A87] text-white mt-1 min-w-[24px] justify-center">6</Badge>
                  <div>
                    <h4 className="font-semibold text-sm">Creation</h4>
                    <p className="text-xs text-muted-foreground">God created the universe in six literal days</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-[#2D5A87] text-white mt-1 min-w-[24px] justify-center">7</Badge>
                  <div>
                    <h4 className="font-semibold text-sm">Nature of Humanity</h4>
                    <p className="text-xs text-muted-foreground">Created in God's image, fallen through sin</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-[#2D5A87] text-white mt-1 min-w-[24px] justify-center">8</Badge>
                  <div>
                    <h4 className="font-semibold text-sm">Great Controversy</h4>
                    <p className="text-xs text-muted-foreground">Cosmic conflict between Christ and Satan</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-[#2D5A87] text-white mt-1 min-w-[24px] justify-center">9</Badge>
                  <div>
                    <h4 className="font-semibold text-sm">Life, Death & Resurrection of Christ</h4>
                    <p className="text-xs text-muted-foreground">
                      Perfect life, atoning death, victorious resurrection
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-[#2D5A87] text-white mt-1 min-w-[24px] justify-center">10</Badge>
                  <div>
                    <h4 className="font-semibold text-sm">Experience of Salvation</h4>
                    <p className="text-xs text-muted-foreground">Justification, sanctification, glorification</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg text-[#2D5A87] mb-4">Church & End Times</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge className="bg-[#2D5A87] text-white mt-1 min-w-[24px] justify-center">11-15</Badge>
                  <div>
                    <h4 className="font-semibold text-sm">Growing in Christ & Church</h4>
                    <p className="text-xs text-muted-foreground">
                      Baptism, Lord's Supper, spiritual gifts, church unity
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-[#2D5A87] text-white mt-1 min-w-[24px] justify-center">16-20</Badge>
                  <div>
                    <h4 className="font-semibold text-sm">Prophetic Ministry & Law</h4>
                    <p className="text-xs text-muted-foreground">Gift of prophecy, law of God, Sabbath</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-[#2D5A87] text-white mt-1 min-w-[24px] justify-center">21-25</Badge>
                  <div>
                    <h4 className="font-semibold text-sm">Christian Living</h4>
                    <p className="text-xs text-muted-foreground">Stewardship, conduct, marriage, Christ's ministry</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-[#2D5A87] text-white mt-1 min-w-[24px] justify-center">26-28</Badge>
                  <div>
                    <h4 className="font-semibold text-sm">Last Day Events</h4>
                    <p className="text-xs text-muted-foreground">Second Coming, death & resurrection, new earth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership-section" className="py-16 px-4 bg-muted/30 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-muted-foreground text-lg">Dedicated servants called to shepherd our congregation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Church Pastor */}
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <img
                    src="/pastor-john-mukasa.png"
                    alt="Pastor John Mukasa"
                    className="w-32 h-32 rounded-full object-cover mx-auto"
                  />
                </div>
                <CardTitle className="text-xl">Pastor Ian Sendegeya</CardTitle>
                <CardDescription>Church Pastor</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Pastor Ian has served our congregation since its founding in 2024, providing spiritual leadership and
                  pastoral care to our diverse international community.
                </p>
                <Badge variant="outline" className="text-xs">
                  5+ Years Ministry
                </Badge>
              </CardContent>
            </Card>

            {/* Church Clerk/Secretary */}
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <img
                    src="/secretary-grace-nakato.png"
                    alt="Grace Nakato"
                    className="w-32 h-32 rounded-full object-cover mx-auto"
                  />
                </div>
                <CardTitle className="text-xl">M.G. Cissy K. Ssali</CardTitle>
                <CardDescription>Church Clerk/Secretary</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  M.G. Cissy maintains our church records, coordinates communications, and ensures smooth administrative
                  operations for our growing congregation.
                </p>
                <Badge variant="outline" className="text-xs">
                  Administration
                </Badge>
              </CardContent>
            </Card>

            {/* Treasurer */}
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <img
                    src="/treasurer-samuel-kato.png"
                    alt="Samuel Kato"
                    className="w-32 h-32 rounded-full object-cover mx-auto"
                  />
                </div>
                <CardTitle className="text-xl">M.G. Harriet Muwonge</CardTitle>
                <CardDescription>Church Treasurer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  M.G. Harriet oversees our church finances, manages tithes and offerings, and ensures faithful
                  stewardship of God's resources entrusted to our congregation.
                </p>
                <Badge variant="outline" className="text-xs">
                  Financial Stewardship
                </Badge>
              </CardContent>
            </Card>

            {/* Head Elder */}
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <img
                    src="/elder-david-ssemakula.png"
                    alt="Elder David Ssemakula"
                    className="w-32 h-32 rounded-full object-cover mx-auto"
                  />
                </div>
                <CardTitle className="text-xl">Elder Jjuuko Godfrey</CardTitle>
                <CardDescription>First Elder/Head Elder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Elder Jjuuko leads our board of elders, assists in pastoral duties, and provides spiritual guidance
                  and leadership support to our church family.
                </p>
                <Badge variant="outline" className="text-xs">
                  Spiritual Leadership
                </Badge>
              </CardContent>
            </Card>

            {/* Sabbath School Superintendent */}
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <img
                    src="/sabbath-school-mary-namuli.png"
                    alt="Mary Namuli"
                    className="w-32 h-32 rounded-full object-cover mx-auto"
                  />
                </div>
                <CardTitle className="text-xl">Mrs. Regina Nyanzi</CardTitle>
                <CardDescription>Sabbath School Superintendent</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Mrs. Regina coordinates our Sabbath School program, ensuring quality Bible study experiences for all
                  age groups in our diverse congregation.
                </p>
                <Badge variant="outline" className="text-xs">
                  Bible Education
                </Badge>
              </CardContent>
            </Card>

            {/* Youth Ministries Director */}
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <img
                    src="/youth-director-peter-ssali.png"
                    alt="Peter Ssali"
                    className="w-32 h-32 rounded-full object-cover mx-auto"
                  />
                </div>
                <CardTitle className="text-xl">M.G. Jesse Kyambadde</CardTitle>
                <CardDescription>Young Adult Leader</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Jesse leads our vibrant youth programs, organizing activities and spiritual growth opportunities for
                  young people and students in our community.
                </p>
                <Badge variant="outline" className="text-xs">
                  Youth Leadership
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-[#2D5A87] to-[#1e3a5f] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Plan Your Visit</h2>
          <p className="text-xl opacity-90">We'd love to welcome you to our church family this Sabbath</p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Clock className="h-8 w-8 mb-2" />
                <CardTitle>Service Times</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm opacity-90">
                  <strong>Sabbath School:</strong> 9:30 AM
                  <br />
                  <strong>Divine Service:</strong> 11:00 AM
                  <br />
                  <strong>AY Service:</strong> 4:00 PM
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <MapPin className="h-8 w-8 mb-2" />
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm opacity-90">
                  Masaka Town
                  <br />
                  Central Region, Uganda
                  <br />
                  <Link href="/contact" className="underline hover:text-white/80">
                    Get Directions
                  </Link>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Phone className="h-8 w-8 mb-2" />
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm opacity-90">
                  <strong>Email:</strong>
                  <br />
                  <a href="mailto:jessekyambadde0@gmail.com" className="underline hover:text-white/80">
                    jessekyambadde0@gmail.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="bg-white text-[#2D5A87] hover:bg-white/90">
              <Link href="/contact">
                <MapPin className="mr-2 h-5 w-5" />
                Get Directions
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/ministries">
                Explore Ministries
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
            <p className="text-muted-foreground">Discover ways to connect and serve in our community</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/ministries">
              <Card className="cursor-pointer hover:shadow-xl transition-all hover:scale-105 border-2 border-transparent hover:border-[#2D5A87] h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Explore Our Ministries</CardTitle>
                  <CardDescription>Find your place to serve and grow in faith</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge>Youth</Badge>
                    <Badge>Children</Badge>
                    <Badge>Music</Badge>
                    <Badge>Health</Badge>
                    <Badge>Outreach</Badge>
                  </div>
                  <Button variant="outline" className="w-full group bg-transparent">
                    View All Ministries
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/events">
              <Card className="cursor-pointer hover:shadow-xl transition-all hover:scale-105 border-2 border-transparent hover:border-[#2D5A87] h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Upcoming Events</CardTitle>
                  <CardDescription>Join us for special services and community activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <p>• Weekly Sabbath Worship</p>
                    <p>• Youth Fellowship Nights</p>
                    <p>• Community Outreach Programs</p>
                    <p>• Special Evangelistic Meetings</p>
                  </div>
                  <Button variant="outline" className="w-full group bg-transparent">
                    View All Events
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
