"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ShoppingCart } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"

const featuredProducts = [
  {
    id: 1,
    name: "Premium Wireless Earbuds",
    price: 299.99,
    originalPrice: 349.99,
    image: "/images/wireless-earbuds.jpg",
    rating: 4.8,
    reviews: 124,
    category: "Electronics",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 399.99,
    originalPrice: 459.99,
    image: "/images/smartwatch.jpg",
    rating: 4.9,
    reviews: 89,
    category: "Electronics",
    badge: "Editor's Choice",
  },
  {
    id: 3,
    name: "Professional Drone",
    price: 799.99,
    originalPrice: 919.99,
    image: "/images/drone.png",
    rating: 4.6,
    reviews: 67,
    category: "Electronics",
    badge: "New Arrival",
  },
  {
    id: 4,
    name: "VR Gaming Headset",
    price: 549.99,
    originalPrice: 629.99,
    image: "/images/vr-headset.png",
    rating: 4.7,
    reviews: 156,
    category: "Electronics",
    badge: "Gaming",
  },
]

export function FeaturedProducts() {
  const { addItem } = useCart()
  const { toast } = useToast()
  const [wishlist, setWishlist] = useState<number[]>([])

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    })
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((i) => i !== productId) : [...prev, productId]))
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Electronics</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the latest in technology with our handpicked selection of premium electronics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Link href={`/products/${product.id}`}>
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  {product.badge && (
                    <Badge className="absolute top-3 left-3" variant="secondary">
                      {product.badge}
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                    onClick={() => toggleWishlist(product.id)}
                  >
                    <Heart className={`h-4 w-4 ${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : ""}`} />
                  </Button>
                </div>

                <div className="p-4">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>

                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-semibold mb-2 hover:text-primary transition-colors">{product.name}</h3>
                  </Link>

                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button className="w-full" onClick={() => handleAddToCart(product)}>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/products">View All Electronics</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
