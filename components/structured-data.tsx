"use client"

import Script from "next/script"

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: "Seventh-day Adventist Church Masaka Town",
    alternateName: "SDA Masaka Town Church",
    url: "https://masakasda.org",
    logo: "https://masakasda.org/logo.png",
    description:
      "A vibrant Seventh-day Adventist church community in Masaka Town, Uganda, serving students, internationals, and families with worship, fellowship, and spiritual growth opportunities.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Masaka Town",
      addressLocality: "Masaka",
      addressRegion: "Central Region",
      addressCountry: "UG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -0.3376,
      longitude: 31.7339,
    },
    telephone: "+256-XXX-XXXXXX",
    email: "info@masakasda.org",
    sameAs: [
      "https://www.facebook.com/SDAMasakaTownChurch",
      "https://www.youtube.com/@SDAMasakaTownChurch",
      "https://twitter.com/SDAMasakaTown",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:30",
        closes: "18:00",
        description: "Sabbath Worship Service",
      },
    ],
    event: {
      "@type": "Event",
      name: "Sabbath Worship Service",
      description: "Weekly worship service with inspiring music, prayer, and biblical preaching",
      startDate: "2025-01-01T08:30:00+03:00",
      endDate: "2025-12-31T18:00:00+03:00",
      eventSchedule: {
        "@type": "Schedule",
        repeatFrequency: "P1W",
        byDay: "Saturday",
      },
      location: {
        "@type": "Place",
        name: "Seventh-day Adventist Church Masaka Town",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Masaka",
          addressCountry: "UG",
        },
      },
      organizer: {
        "@type": "Organization",
        name: "Seventh-day Adventist Church Masaka Town",
        url: "https://masakasda.org",
      },
    },
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  )
}
