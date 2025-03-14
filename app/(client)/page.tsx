import Benefits from "@/components/ui/benefits"
import FeaturedProducts from "@/components/ui/featured-products"
import Hero from "@/components/ui/hero"
import Lead from "@/components/ui/lead"
import Location from "@/components/ui/location"
import Misson from "@/components/ui/mission"

export const dynamic = "force-dynamic"

export default function Page() {
  return (
    <>
      <Hero />
      <Benefits />
      <FeaturedProducts />
      <Lead />
      <Misson />
      <Location />
    </>
  )
}
