import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Book, Globe, ExternalLink } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="lg:pr-[14.28%]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-[#2D5A87] to-[#1e3a5f] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Church</h1>
          <p className="text-xl opacity-90">
            Discover our history, mission, and the faith community that calls Masaka Town home
          </p>
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

      {/* Core Beliefs Details */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">28 Fundamental Beliefs</h2>
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
      <section className="py-16 px-4 bg-muted/30">
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
    </div>
  )
}
