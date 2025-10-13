"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Link2, Mail } from "lucide-react"
import { useState } from "react"

interface SocialShareButtonsProps {
  title: string
  url?: string
}

export function SocialShareButtons({ title, url }: SocialShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "")
  const encodedUrl = encodeURIComponent(shareUrl)
  const encodedTitle = encodeURIComponent(title)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("[v0] Failed to copy link:", err)
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        size="sm"
        variant="outline"
        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, "_blank")}
      >
        <Facebook className="h-4 w-4 mr-1" />
        Share
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`, "_blank")}
      >
        <Twitter className="h-4 w-4 mr-1" />
        Tweet
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, "_blank")}
      >
        <Linkedin className="h-4 w-4 mr-1" />
        Share
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={() => window.open(`mailto:?subject=${encodedTitle}&body=Check out this sermon: ${encodedUrl}`)}
      >
        <Mail className="h-4 w-4 mr-1" />
        Email
      </Button>
      <Button size="sm" variant="outline" onClick={handleCopyLink}>
        <Link2 className="h-4 w-4 mr-1" />
        {copied ? "Copied!" : "Copy Link"}
      </Button>
    </div>
  )
}
