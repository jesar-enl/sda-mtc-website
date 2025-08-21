import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, CreditCard, Smartphone, Building, Gift, Target, Users, Home } from "lucide-react"

export default function GivePage() {
  const givingOptions = [
    {
      title: "Sabbath Envelope Collection",
      description: "Our most popular and traditional way of giving during worship service",
      icon: Gift,
      details: [
        "Use offering envelopes provided at church entrance",
        "Fill out your name and amount for proper record keeping",
        "Place in offering plate during Sabbath worship",
        "Available for tithes, offerings, and special projects",
        "Collected every Sabbath during worship service",
      ],
      popular: true,
      featured: true,
    },
    {
      title: "Mobile Money",
      description: "Give securely using MTN Mobile Money or Airtel Money",
      icon: Smartphone,
      details: [
        "MTN Mobile Money: *165*3# or dial *165*1*church_number#",
        "Airtel Money: *185*9# or dial *185*1*church_number#",
        "Church Mobile Money Number: +256 700 123 456",
      ],
      popular: false,
      featured: false,
    },
    {
      title: "Bank Transfer",
      description: "Direct bank transfer to our church account",
      icon: Building,
      details: [
        "Bank: Stanbic Bank Uganda",
        "Account Name: Masaka Town SDA Church",
        "Account Number: 9030012345678",
        "Swift Code: SBICUGKX",
      ],
      popular: false,
      featured: false,
    },
    {
      title: "PayPal",
      description: "International giving through PayPal",
      icon: CreditCard,
      details: [
        "PayPal Email: giving@masakasda.org",
        "Accepts major credit cards",
        "Secure international transactions",
        "Instant confirmation",
      ],
      popular: false,
      featured: false,
    },
  ]

  const givingCategories = [
    {
      title: "Tithes",
      description: "Returning 10% of our income to God as outlined in Malachi 3:10",
      icon: Heart,
      color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
      details:
        "Tithes support the worldwide mission of the Seventh-day Adventist Church, including pastoral ministry, evangelism, and church operations.",
    },
    {
      title: "Local Church Offerings",
      description: "Supporting our local church ministries and operations",
      icon: Home,
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      details:
        "Local offerings fund church maintenance, utilities, local ministries, community outreach programs, and facility improvements.",
    },
    {
      title: "Mission Offerings",
      description: "Supporting global mission work and evangelism",
      icon: Target,
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      details:
        "Mission offerings support evangelistic efforts, church planting, humanitarian aid, and spreading the gospel worldwide.",
    },
    {
      title: "Special Projects",
      description: "Contributing to specific church building and ministry projects",
      icon: Users,
      color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      details:
        "Special project funds go toward church construction, equipment purchases, ministry expansions, and community development initiatives.",
    },
  ]

  const currentProjects = [
    {
      title: "New Sanctuary Construction",
      description: "Building a larger sanctuary to accommodate our growing congregation",
      target: 500000000,
      raised: 320000000,
      progress: 64,
    },
    {
      title: "Youth Center Development",
      description: "Creating a dedicated space for youth activities and programs",
      target: 150000000,
      raised: 85000000,
      progress: 57,
    },
    {
      title: "Community Health Clinic",
      description: "Establishing a health clinic to serve our local community",
      target: 200000000,
      raised: 45000000,
      progress: 23,
    },
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-UG", {
      style: "currency",
      currency: "UGX",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="lg:pr-[14.28%]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Give & Support</h1>
          <p className="text-xl opacity-90">
            {'"Bring the whole tithe into the storehouse, that there may be food in my house."'}
            <br />
            <span className="text-lg opacity-75">- Malachi 3:10</span>
          </p>
          <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
            <p className="text-lg font-semibold">Sabbath Worship: 8:30 AM - 6:00 PM</p>
            <p className="text-sm opacity-80">Join us for worship and bring your offering envelope</p>
          </div>
        </div>
      </section>

      {/* Giving Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Ways to Give</h2>
            <p className="text-muted-foreground text-lg">
              Your faithful giving supports God's work locally and around the world
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {givingCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-emerald-500"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-800 dark:text-white">{category.title}</CardTitle>
                        <Badge className={category.color} variant="secondary">
                          Essential
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-base">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{category.details}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Giving Methods */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">How to Give</h2>
            <p className="text-muted-foreground text-lg">Choose the giving method that works best for you</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {givingOptions.map((option, index) => {
              const IconComponent = option.icon
              return (
                <Card
                  key={index}
                  className={`hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                    option.featured
                      ? "ring-2 ring-emerald-500 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20"
                      : ""
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-3 text-white rounded-full ${
                            option.featured
                              ? "bg-gradient-to-r from-emerald-500 to-teal-600"
                              : "bg-gradient-to-r from-blue-500 to-indigo-600"
                          }`}
                        >
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-gray-800 dark:text-white">{option.title}</CardTitle>
                          {option.popular && (
                            <Badge
                              className={`mt-1 ${
                                option.featured
                                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                                  : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                              }`}
                            >
                              {option.featured ? "Most Popular" : "Popular"}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-base">{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-6">
                      {option.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="text-sm text-muted-foreground">
                          • {detail}
                        </div>
                      ))}
                    </div>
                    <Button
                      className={`w-full ${
                        option.featured
                          ? "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
                          : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                      }`}
                    >
                      {option.featured ? "Give on Sabbath" : "Give Now"}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Current Projects</h2>
            <p className="text-muted-foreground text-lg">
              Special projects that need your support to expand God's kingdom
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProjects.map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-purple-500"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 dark:text-white">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <div>
                        <p className="text-muted-foreground">Raised</p>
                        <p className="font-semibold">{formatCurrency(project.raised)}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-muted-foreground">Goal</p>
                        <p className="font-semibold">{formatCurrency(project.target)}</p>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700">
                      Support This Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Giving Impact */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Your Impact</h2>
            <p className="text-muted-foreground text-lg">
              See how your faithful giving is making a difference in our community and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">150+</div>
                <p className="text-muted-foreground">Families Supported Monthly</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">25</div>
                <p className="text-muted-foreground">Active Ministry Programs</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <p className="text-muted-foreground">Community Members Served</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Giving */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="text-center border-l-4 border-l-emerald-500">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 dark:text-white">Questions About Giving?</CardTitle>
              <CardDescription>
                Our treasury team is here to help with any questions about giving, receipts, or special projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  <p>
                    <strong>Treasurer:</strong> Brother Samuel Kiggundu
                  </p>
                  <p>
                    <strong>Email:</strong> treasurer@masakasda.org
                  </p>
                  <p>
                    <strong>Phone:</strong> +256 700 987 654
                  </p>
                </div>
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
                  Contact Treasury Team
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
