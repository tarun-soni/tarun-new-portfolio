'use client'

import WroteSection from '@/components/sections/WroteSection'
import PageLayout from '@/components/PageLayout'

export default function BlogsPage() {
  return (
    <PageLayout route="/blogs">
      <WroteSection />
    </PageLayout>
  )
}
