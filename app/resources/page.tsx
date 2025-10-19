import type { Metadata } from "next"
import ResourcesClientPage from "./_components/ResourcesClientPage"

export const metadata: Metadata = {
  title: "Resources",
}

export default function ResourcesPage() {
  return <ResourcesClientPage />
}
