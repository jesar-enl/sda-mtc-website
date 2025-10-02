import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sermons',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
