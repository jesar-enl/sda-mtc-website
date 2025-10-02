import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
