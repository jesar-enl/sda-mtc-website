"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

interface DevotionalPreviewProps {
  title: string
  excerpt: string
  date: string
  category: string
  slug: string
  image: string
}

export function DevotionalPreview({ title, excerpt, date, category, slug, image }: DevotionalPreviewProps) {
  const getBasePath = () => {
    switch (category.toLowerCase()) {
      case "blog":
        return "/blogs"
      case "message":
        return "/messages"
      case "devotional":
      default:
        return "/devotionals"
    }
  }

  return (
    <Card className="hover:shadow-lg transition-all duration-300 overflow-hidden group stagger-item">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-[#36747D] text-white">{category}</Badge>
        </div>
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <CardTitle className="text-xl line-clamp-2 group-hover:text-[#36747D] transition-colors">{title}</CardTitle>
        <CardDescription className="line-clamp-3">{excerpt}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={`${getBasePath()}/${slug}`}>
          <Button variant="ghost" className="w-full group/btn">
            Read Full Message
            <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
