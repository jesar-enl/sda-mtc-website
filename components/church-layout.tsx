"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Livestream", href: "/livestream" },
  { name: "Sermons", href: "/sermons" },
  { name: "Ministries", href: "/ministries" },
  { name: "Events", href: "/events" },
  { name: "Resources", href: "/resources" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
  { name: "Give", href: "/give" },
]

interface ChurchLayoutProps {
  children: React.ReactNode
}

export function ChurchLayout({ children }: ChurchLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-cyan-700 to-cyan-600 dark:from-gray-900 dark:to-gray-800 backdrop-blur-md shadow-lg border-b border-cyan-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <img
                  src="/adventist-symbol--white.png"
                  alt="SDA Logo"
                  className="h-10 w-10 lg:h-12 lg:w-12 transition-transform group-hover:scale-110"
                />
              </Link>
            </div>

            {/* Desktop Navigation - More compact and visually appealing */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg group",
                    pathname === item.href
                      ? "text-white bg-white/20"
                      : "text-white/90 hover:text-white hover:bg-white/10",
                  )}
                >
                  {item.name}
                  {/* Active indicator underline */}
                  {pathname === item.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-white rounded-full" />
                  )}
                  {/* Hover underline */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white/60 rounded-full transition-all duration-200 group-hover:w-8" />
                </Link>
              ))}
            </nav>

            {/* Mobile menu button and theme toggle */}
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-white hover:bg-white/10"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-white/10">
              <nav className="py-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                      pathname === item.href
                        ? "text-white bg-white/20"
                        : "text-white/90 hover:text-white hover:bg-white/10",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex min-h-screen pt-16">
        {/* Main Content Area (6/7 width) */}
        <main className="flex-1 lg:w-6/7">
          {children}
          <Footer />
        </main>

        {/* Right Strip (1/7 width) - Logo only, clean and minimal */}
        <aside className="hidden lg:block lg:w-1/7 min-h-screen fixed right-0 top-16 bg-gradient-to-b from-cyan-700 to-cyan-800 dark:from-gray-900 dark:to-gray-950">
          <div className="flex flex-col items-center justify-center h-full p-8">
            {/* SDA Logo - centered and prominent */}
            <div className="relative group">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-300" />
              <img
                src="/adventist-symbol--white.png"
                alt="SDA Logo"
                className="relative w-24 h-24 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/adventist-symbol--white.png" alt="SDA Logo" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold">Masaka Town SDA Church</h3>
                <p className="text-gray-300 text-sm">A Family of Faith, Preparing for Christ's Soon Return</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              An English-speaking Seventh-day Adventist congregation serving internationals and students in Masaka Town
              since 2006.
            </p>
            <div className="text-gray-300">
              <p>
                <strong>Sabbath Worship:</strong> Saturday 8:30 AM - 6:00 PM
              </p>
              <p>
                <strong>Location:</strong> Masaka Town, Uganda
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/livestream" className="text-gray-300 hover:text-white transition-colors">
                  Livestream
                </Link>
              </li>
              <li>
                <Link href="/sermons" className="text-gray-300 hover:text-white transition-colors">
                  Sermons
                </Link>
              </li>
              <li>
                <Link href="/ministries" className="text-gray-300 hover:text-white transition-colors">
                  Ministries
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/give" className="text-gray-300 hover:text-white transition-colors">
                  Give
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Bible Study
                </Link>
              </li>
              <li>
                <a
                  href="https://www.adventist.org/beliefs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Beliefs
                </a>
              </li>
              <li>
                <a
                  href="https://www.hopechannel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Hope Channel
                </a>
              </li>
              <li>
                <a
                  href="https://www.adventist.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  General Conference
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2006 - {new Date().getFullYear()} Seventh-day Adventist Church Masaka Town. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
