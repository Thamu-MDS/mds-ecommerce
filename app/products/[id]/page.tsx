"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Heart, ShoppingCart, Minus, Plus, Truck, Shield, RotateCcw } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"

const products = [
  {
    _id: "1",
    name: "Premium Wireless Headphones",
    description:
      "Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, comfortable ear cushions, and a sleek design, these headphones are perfect for music lovers and professionals alike. With 30 hours of battery life and quick charging capabilities, you'll never miss a beat.",
    price: 299.99,
    originalPrice: 399.99,
    category: "Electronics",
    brand: "TechPro",
    images: ["/images/headphones.png", "/images/headphones.png"],
    rating: 4.8,
    reviews: 124,
    stock: 10,
    badge: "Best Seller",
    tags: ["headphones", "wireless", "audio", "noise-cancellation"],
  },
  {
    _id: "2",
    name: "Luxury Watch Collection",
    description:
      "Elevate your style with our luxury watch collection. Crafted with precision and attention to detail, this timepiece features a stainless steel case, sapphire crystal, and automatic movement. Water-resistant up to 100 meters, it's perfect for both everyday wear and special occasions.",
    price: 599.99,
    originalPrice: 799.99,
    category: "Fashion",
    brand: "LuxTime",
    images: ["/images/watch.png", "/images/watch.png"],
    rating: 4.9,
    reviews: 89,
    stock: 5,
    badge: "Limited Edition",
    tags: ["watch", "luxury", "accessories", "fashion"],
  },
  {
    _id: "3",
    name: "Smart Home Assistant",
    description:
      "Transform your home with our intelligent smart home assistant. Control your lights, thermostat, and other smart devices with simple voice commands. Stream music, get weather updates, and manage your schedule hands-free. With continuous updates and expanding capabilities, this assistant becomes more helpful every day.",
    price: 149.99,
    originalPrice: 199.99,
    category: "Electronics",
    brand: "SmartTech",
    images: ["/images/smart-speaker.png", "/images/smart-speaker.png"],
    rating: 4.7,
    reviews: 256,
    stock: 20,
    badge: "New Arrival",
    tags: ["smart home", "voice assistant", "speaker", "automation"],
  },
  {
    _id: "4",
    name: "Professional Camera Lens",
    description:
      "Capture stunning images with our professional-grade camera lens. Designed for both amateur and professional photographers, this lens offers exceptional clarity, sharpness, and bokeh. The weather-sealed construction ensures reliability in various shooting conditions, while the fast autofocus helps you capture the perfect moment.",
    price: 899.99,
    originalPrice: 1199.99,
    category: "Electronics",
    brand: "PhotoPro",
    images: ["/images/camera.png", "/images/camera.png"],
    rating: 4.9,
    reviews: 67,
    stock: 3,
    badge: "Pro Choice",
    tags: ["camera", "photography", "lens", "professional"],
  },
  {
    _id: "5",
    name: "Designer T-Shirt",
    description:
      "Make a statement with our designer t-shirt. Made from 100% organic cotton, this comfortable and stylish t-shirt features a unique design created by renowned artists. The premium fabric ensures durability and comfort throughout the day, while the modern fit flatters all body types.",
    price: 49.99,
    originalPrice: 69.99,
    category: "Fashion",
    brand: "StyleCo",
    images: ["/images/tshirt.png", "/images/tshirt.png"],
    rating: 4.5,
    reviews: 112,
    stock: 50,
    badge: "Trending",
    tags: ["fashion", "t-shirt", "clothing", "designer"],
  },
  {
    _id: "6",
    name: "Ceramic Coffee Mug",
    description:
      "Enjoy your morning coffee in style with our handcrafted ceramic mug. Each piece is uniquely glazed by skilled artisans, making your mug one-of-a-kind. The ergonomic handle and perfect weight provide a comfortable grip, while the durable construction ensures years of use.",
    price: 24.99,
    originalPrice: 34.99,
    category: "Home & Garden",
    brand: "HomeStyle",
    images: ["/images/mug.png", "/images/mug.png"],
    rating: 4.3,
    reviews: 78,
    stock: 25,
    badge: "Handcrafted",
    tags: ["mug", "ceramic", "coffee", "kitchen"],
  },
]

const reviewsData = {
  "1": [
    {
      _id: "101",
      productId: "1",
      rating: 5,
      comment:
        "These headphones are amazing! The sound quality is exceptional and the noise cancellation works perfectly. Battery life is impressive too.",
      isVerified: true,
      createdAt: "2024-01-20T10:00:00.000Z",
    },
    {
      _id: "102",
      productId: "1",
      rating: 4,
      comment:
        "Great headphones overall. The sound is clear and balanced. My only complaint is that they're a bit tight on my head after a few hours.",
      isVerified: false,
      createdAt: "2024-01-15T14:30:00.000Z",
    },
  ],
  "2": [
    {
      _id: "201",
      productId: "2",
      rating: 5,
      comment:
        "This watch is absolutely stunning! The craftsmanship is impeccable and it looks even better in person. Worth every penny.",
      isVerified: true,
      createdAt: "2024-02-01T08:00:00.000Z",
    },
    {
      _id: "202",
      productId: "2",
      rating: 5,
      comment:
        "Elegant design and perfect accuracy. I've received many compliments since I started wearing it. The packaging was also premium quality.",
      isVerified: true,
      createdAt: "2024-01-25T16:45:00.000Z",
    },
  ],
  "3": [
    {
      _id: "301",
      productId: "3",
      rating: 5,
      comment:
        "This smart assistant has transformed my home! Setting up routines was easy and it integrates perfectly with all my smart devices.",
      isVerified: true,
      createdAt: "2024-02-10T18:00:00.000Z",
    },
    {
      _id: "302",
      productId: "3",
      rating: 4,
      comment:
        "Works great for most tasks, but occasionally has trouble understanding complex commands. Sound quality for music is surprisingly good!",
      isVerified: true,
      createdAt: "2024-02-05T20:00:00.000Z",
    },
  ],
  "4": [
    {
      _id: "401",
      productId: "4",
      rating: 5,
      comment:
        "Professional quality lens that has dramatically improved my photography. Sharp focus and beautiful bokeh effect.",
      isVerified: true,
      createdAt: "2024-01-30T09:15:00.000Z",
    },
  ],
  "5": [
    {
      _id: "501",
      productId: "5",
      rating: 4,
      comment: "Love the design and the fabric is super soft. Fits true to size and washes well without fading.",
      isVerified: true,
      createdAt: "2024-02-12T11:30:00.000Z",
    },
  ],
  "6": [
    {
      _id: "601",
      productId: "6",
      rating: 5,
      comment:
        "Beautiful mug that keeps my coffee hot for longer than expected. The glaze is gorgeous and each one is truly unique.",
      isVerified: true,
      createdAt: "2024-02-08T07:45:00.000Z",
    },
    {
      _id: "602",
      productId: "6",
      rating: 4,
      comment:
        "Great size and comfortable to hold. The only reason for 4 stars instead of 5 is that it's a bit heavier than I expected.",
      isVerified: false,
      createdAt: "2024-02-03T16:20:00.000Z",
    },
  ],
}

export default function ProductDetailPage() {
  const params = useParams()
  const { addItem } = useCart()
  const { toast } = useToast()

  const product = products.find((p) => p._id === params.id)
  const reviews = reviewsData[params.id as string] || []
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleAddToCart = () => {
    if (!product) return

    addItem({
      id: Number.parseInt(product._id),
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
    })

    toast({
      title: "Added to cart",
      description: `${quantity} ${product.name}(s) added to your cart.`,
    })
  }

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${product?.name} has been ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
    })
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Product not found</p>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg border bg-white p-4">
                <img
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square overflow-hidden rounded-lg border-2 ${
                        selectedImage === index ? "border-primary" : "border-muted"
                      } bg-white p-2`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{product.category}</Badge>
                  <Badge variant="secondary">{product.brand}</Badge>
                  {product.badge && <Badge>{product.badge}</Badge>}
                </div>

                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                  )}
                  {product.originalPrice && (
                    <Badge variant="destructive">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  )}
                </div>

                <p className="text-muted-foreground mb-6">{product.description}</p>

                {/* Stock Status */}
                <div className="mb-6">
                  {product.stock > 0 ? (
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600">In Stock ({product.stock} available)</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-red-600">Out of Stock</span>
                    </div>
                  )}
                </div>

                {/* Quantity and Actions */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded-lg">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                        disabled={quantity >= product.stock}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <Button onClick={handleAddToCart} disabled={product.stock === 0} className="flex-1" size="lg">
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                    </Button>

                    <Button variant="outline" size="lg" onClick={toggleWishlist}>
                      <Heart className={`h-5 w-5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
                    </Button>
                  </div>

                  <Button variant="outline" className="w-full" size="lg">
                    Buy Now
                  </Button>
                </div>

                {/* Features */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center">
                    <Truck className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm font-medium">Free Shipping</p>
                    <p className="text-xs text-muted-foreground">On orders over $50</p>
                  </div>
                  <div className="text-center">
                    <Shield className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm font-medium">Warranty</p>
                    <p className="text-xs text-muted-foreground">1 year warranty</p>
                  </div>
                  <div className="text-center">
                    <RotateCcw className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm font-medium">Returns</p>
                    <p className="text-xs text-muted-foreground">30-day returns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews ({reviews.length})</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Product Description</h3>
                    <p className="text-muted-foreground leading-relaxed">{product.description}</p>

                    {product.tags && product.tags.length > 0 && (
                      <div className="mt-6">
                        <h4 className="font-medium mb-2">Tags:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.tags.map((tag: string) => (
                            <Badge key={tag} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="specifications" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Specifications</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium">Brand:</span>
                        <span>{product.brand}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="font-medium">Category:</span>
                        <span>{product.category}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="font-medium">Weight:</span>
                        <span>1.2 kg</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="font-medium">Dimensions:</span>
                        <span>25 x 15 x 8 cm</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>

                    {reviews.length > 0 ? (
                      <div className="space-y-6">
                        {reviews.map((review: any) => (
                          <div key={review._id} className="border-b pb-4 last:border-b-0">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              {review.isVerified && (
                                <Badge variant="secondary" className="text-xs">
                                  Verified Purchase
                                </Badge>
                              )}
                            </div>
                            <p className="text-muted-foreground">{review.comment}</p>
                            <p className="text-xs text-muted-foreground mt-2">
                              {new Date(review.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">No reviews yet. Be the first to review this product!</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
