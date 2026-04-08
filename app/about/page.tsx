import { AboutHero } from '@/sections/about/about-hero'
import { AboutReliability } from '@/sections/about/about-reliability'
import { AboutKrp } from '@/sections/about/about-krp'
import { AboutWorking } from '@/sections/about/about-working'
import { AboutMembership } from '@/sections/about/about-membership'

export default function Page() {
  return (
    <>
      <AboutHero />
      <AboutReliability />
      <AboutKrp />
      <AboutWorking />
      <AboutMembership />
    </>
  )
}