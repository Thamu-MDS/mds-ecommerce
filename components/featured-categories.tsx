"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    id: 1,
    name: "Smartphones",
    image: "/images/smartphone.jpg",
    count: 25,
    href: "/products?category=smartphones",
  },
  {
    id: 2,
    name: "Laptops",
    image: "/images/laptop.jpg",
    count: 18,
    href: "/products?category=laptops",
  },
  {
    id: 3,
    name: "Gaming",
    image: "/images/vr-headset.png",
    count: 32,
    href: "/products?category=gaming",
  },
  {
    id: 4,
    name: "Audio",
    image: "/images/wireless-earbuds.jpg",
    count: 28,
    href: "/products?category=audio",
  },
  {
    id: 5,
    name: "Smart Home",
    image: "/images/smart-doorbell.png",
    count: 22,
    href: "/products?category=smart-home",
  },
  {
    id: 6,
    name: "Accessories",
    image: "/images/power-bank.png",
    count: 45,
    href: "/products?category=accessories",
  },
]

export function FeaturedCategories() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Shop Electronics by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of electronics categories and find the perfect tech for your needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={category.href}>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4 text-center">
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} items</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
