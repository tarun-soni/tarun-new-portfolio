import HomeSection from '@/components/sections/HomeSection'
import PageLayout from '@/components/PageLayout'

export default function AboutPage() {
  return (
    <PageLayout route="/about" showCount={false}>
      <HomeSection />
    </PageLayout>
  )
}
