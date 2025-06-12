"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { ProductFilters } from "@/components/product-filters"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Grid, List, Filter } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface Filters {
  category: string[]
  brand: string[]
  priceRange: [number, number]
  rating: number
  inStock: boolean
}

const staticProducts = [
  {
    _id: "1",
    name: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 299.99,
    imageUrl: "/images/wireless-earbuds.jpg",
    category: "Electronics",
    brand: "TechPro",
    rating: 4.8,
    inStock: true,
  },
  {
    _id: "2",
    name: "Smart Fitness Watch",
    description: "Advanced fitness tracking with heart rate monitor",
    price: 399.99,
    imageUrl: "/images/smartwatch.jpg",
    category: "Electronics",
    brand: "TechPro",
    rating: 4.9,
    inStock: true,
  },
  {
    _id: "3",
    name: "Ultra-Thin Laptop",
    description: "Lightweight laptop perfect for work and entertainment",
    price: 1299.99,
    imageUrl: "/images/laptop.jpg",
    category: "Electronics",
    brand: "TechPro",
    rating: 4.7,
    inStock: true,
  },
  {
    _id: "4",
    name: "5G Smartphone",
    description: "Latest smartphone with 5G connectivity and AI camera",
    price: 899.99,
    imageUrl: "/images/smartphone.jpg",
    category: "Electronics",
    brand: "TechPro",
    rating: 4.9,
    inStock: true,
  },
  {
    _id: "5",
    name: "Professional Drone",
    description: "4K camera drone with GPS and obstacle avoidance",
    price: 799.99,
    imageUrl: "/images/drone.png",
    category: "Electronics",
    brand: "SkyTech",
    rating: 4.6,
    inStock: true,
  },
  {
    _id: "6",
    name: "VR Gaming Headset",
    description: "Immersive virtual reality headset for gaming",
    price: 549.99,
    imageUrl: "/images/vr-headset.png",
    category: "Electronics",
    brand: "GameTech",
    rating: 4.7,
    inStock: true,
  },
  {
    _id: "7",
    name: "Mechanical Gaming Keyboard",
    description: "RGB backlit mechanical keyboard for gaming",
    price: 179.99,
    imageUrl: "/images/mechanical-keyboard.png",
    category: "Electronics",
    brand: "GameTech",
    rating: 4.8,
    inStock: true,
  },
  {
    _id: "8",
    name: "Precision Gaming Mouse",
    description: "High-DPI gaming mouse with customizable buttons",
    price: 89.99,
    imageUrl: "/images/gaming-mouse.png",
    category: "Electronics",
    brand: "GameTech",
    rating: 4.6,
    inStock: true,
  },
  {
    _id: "9",
    name: "4K Webcam",
    description: "Ultra HD webcam for streaming and video calls",
    price: 199.99,
    imageUrl: "/images/webcam.png",
    category: "Electronics",
    brand: "StreamTech",
    rating: 4.5,
    inStock: true,
  },
  {
    _id: "10",
    name: "Portable Power Bank",
    description: "High-capacity power bank with fast charging",
    price: 79.99,
    imageUrl: "/images/power-bank.png",
    category: "Electronics",
    brand: "PowerTech",
    rating: 4.4,
    inStock: true,
  },
  {
    _id: "11",
    name: "Smart 4K TV",
    description: "65-inch smart TV with HDR and streaming apps",
    price: 1199.99,
    imageUrl: "/images/smart-tv.png",
    category: "Electronics",
    brand: "ViewTech",
    rating: 4.7,
    inStock: true,
  },
  {
    _id: "12",
    name: "Security Camera System",
    description: "Wireless security camera with night vision",
    price: 299.99,
    imageUrl: "/images/security-camera.png",
    category: "Electronics",
    brand: "SecureTech",
    rating: 4.5,
    inStock: true,
  },
  {
    _id: "13",
    name: "Robot Vacuum Cleaner",
    description: "Smart robot vacuum with mapping technology",
    price: 449.99,
    imageUrl: "/images/robot-vacuum.png",
    category: "Electronics",
    brand: "CleanTech",
    rating: 4.6,
    inStock: true,
  },
  {
    _id: "14",
    name: "Smart Air Purifier",
    description: "WiFi-enabled air purifier with HEPA filter",
    price: 329.99,
    imageUrl: "/images/air-purifier.png",
    category: "Electronics",
    brand: "AirTech",
    rating: 4.4,
    inStock: true,
  },
  {
    _id: "15",
    name: "Electric Scooter",
    description: "Foldable electric scooter with long battery life",
    price: 599.99,
    imageUrl: "/images/electric-scooter.png",
    category: "Electronics",
    brand: "RideTech",
    rating: 4.3,
    inStock: true,
  },
  {
    _id: "16",
    name: "Smart Video Doorbell",
    description: "WiFi doorbell with HD video and two-way audio",
    price: 249.99,
    imageUrl: "/images/smart-doorbell.png",
    category: "Electronics",
    brand: "HomeTech",
    rating: 4.5,
    inStock: true,
  },
  {
    _id: "17",
    name: "Portable Bluetooth Speaker",
    description: "Waterproof speaker with 360-degree sound",
    price: 99.99,
    imageUrl: "/images/bluetooth-speaker.png",
    category: "Electronics",
    brand: "SoundWave",
    rating: 4.6,
    inStock: true,
  },
  {
    _id: "18",
    name: "Gaming Headset Pro",
    description: "Professional gaming headset with surround sound",
    price: 179.99,
    imageUrl: "/images/gaming-headset.png",
    category: "Electronics",
    brand: "GameTech",
    rating: 4.6,
    inStock: true,
  },
  {
    _id: "19",
    name: "Ultra-Slim Tablet",
    description: "Lightweight tablet perfect for work and entertainment",
    price: 449.99,
    imageUrl: "/images/tablet.png",
    category: "Electronics",
    brand: "TechPro",
    rating: 4.7,
    inStock: true,
  },
  {
    _id: "20",
    name: "Smart Home Assistant",
    description: "Voice-controlled smart home device",
    price: 149.99,
    imageUrl: "/images/smart-speaker.png",
    category: "Electronics",
    brand: "SmartTech",
    rating: 4.7,
    inStock: true,
  },
]

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")
  const [products, setProducts] = useState(staticProducts)
  const [filters, setFilters] = useState<Filters>({
    category: [],
    brand: [],
    priceRange: [0, 1500],
    rating: 0,
    inStock: false,
  })

  const filteredProducts = products.filter((product) => {
    const categoryMatch = filters.category.length === 0 || filters.category.includes(product.category)
    const brandMatch = filters.brand.length === 0 || filters.brand.includes(product.brand)
    const priceMatch = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    const ratingMatch = filters.rating === 0 || product.rating >= filters.rating
    const inStockMatch = !filters.inStock || product.inStock

    return categoryMatch && brandMatch && priceMatch && ratingMatch && inStockMatch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "featured") {
      return 0
    }
    if (sortBy === "newest") {
      return 0
    }
    if (sortBy === "price-low") {
      return a.price - b.price
    }
    if (sortBy === "price-high") {
      return b.price - a.price
    }
    if (sortBy === "rating") {
      return b.rating - a.rating
    }
    return 0
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop Filters Sidebar */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <ProductFilters filters={filters} onFiltersChange={setFilters} />
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h1 className="text-2xl font-bold">Electronics Store</h1>
                  <p className="text-muted-foreground">{`Showing ${sortedProducts.length} electronics products`}</p>
                </div>

                <div className="flex items-center gap-4">
                  {/* Mobile Filter Button */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="lg:hidden">
                        <Filter className="h-4 w-4 mr-2" />
                        Filters
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-80">
                      <ProductFilters filters={filters} onFiltersChange={setFilters} />
                    </SheetContent>
                  </Sheet>

                  {/* Sort */}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* View Mode */}
                  <div className="flex border rounded-lg">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Products Grid/List */}
              <div
                className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}
              >
                {sortedProducts.map((product: any) => (
                  <ProductCard
                    key={product._id}
                    product={{
                      id: Number.parseInt(product._id),
                      name: product.name,
                      price: product.price,
                      originalPrice: product.price * 1.15,
                      image: product.imageUrl,
                      rating: product.rating,
                      reviews: Math.floor(product.rating * 25),
                      category: product.category,
                      brand: product.brand,
                      inStock: product.inStock,
                      badge: product.price > 500 ? "Premium" : undefined,
                    }}
                    viewMode={viewMode}
                  />
                ))}
              </div>

              {sortedProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No products found matching your criteria.</p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() =>
                      setFilters({
                        category: [],
                        brand: [],
                        priceRange: [0, 1500],
                        rating: 0,
                        inStock: false,
                      })
                    }
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
