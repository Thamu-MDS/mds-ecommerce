"use client"

import { Card, CardContent } from "@/components/ui/card"

const brands = [
  { name: "TechPro", logo: "/images/logo-new.png", description: "Premium Technology" },
  { name: "StyleCo", logo: "/images/logo-new.png", description: "Fashion Forward" },
  { name: "HomeStyle", logo: "/images/logo-new.png", description: "Home Essentials" },
  { name: "FitTech", logo: "/images/logo-new.png", description: "Sports & Fitness" },
  { name: "LuxTime", logo: "/images/logo-new.png", description: "Luxury Timepieces" },
  { name: "PhotoPro", logo: "/images/logo-new.png", description: "Photography Gear" },
]

export function BrandShowcase() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted Brands</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We partner with the world's leading brands to bring you the highest quality products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={`${brand.name} logo`}
                    className="w-16 h-16 mx-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="font-semibold text-sm mb-1">{brand.name}</h3>
                <p className="text-xs text-muted-foreground">{brand.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
