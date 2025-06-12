import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Zap, Shield, Truck } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm opacity-90">Trusted by 50,000+ tech enthusiasts</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Latest Electronics
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  Cutting-Edge Tech
                </span>
              </h1>
              <p className="text-xl opacity-90 max-w-lg">
                Discover the newest innovations in technology. From smartphones to smart homes, we have everything you
                need to stay connected and ahead of the curve.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/products">
                  Shop Electronics
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <Link href="/categories">Browse Categories</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <Zap className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
                <div className="text-lg font-bold">Latest Tech</div>
                <div className="text-sm opacity-75">Newest Releases</div>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-green-400" />
                <div className="text-lg font-bold">2 Year Warranty</div>
                <div className="text-sm opacity-75">Full Protection</div>
              </div>
              <div className="text-center">
                <Truck className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                <div className="text-lg font-bold">Free Shipping</div>
                <div className="text-sm opacity-75">On Orders $100+</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 p-8">
              <img
                src="https://i.imghippo.com/files/l2253wm.jpg"
                alt="Latest Electronics - Professional Drone"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black p-4 rounded-2xl font-bold">
              <div className="text-sm">New Release</div>
              <div className="text-2xl">25% OFF</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
