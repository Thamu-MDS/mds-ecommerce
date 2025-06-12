"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight } from "lucide-react"

const lifestyleImages = [
  {
    id: 1,
    src: "/images/lifestyle-1.png",
    alt: "Modern workspace with premium products",
    title: "Workspace Essentials",
    description: "Create the perfect productive environment",
  },
  {
    id: 2,
    src: "/images/lifestyle-2.png",
    alt: "Fitness and wellness lifestyle",
    title: "Active Lifestyle",
    description: "Gear up for your fitness journey",
  },
  {
    id: 3,
    src: "/images/lifestyle-3.png",
    alt: "Home comfort and relaxation",
    title: "Home Comfort",
    description: "Transform your living space",
  },
  {
    id: 4,
    src: "/images/brand-showcase.png",
    alt: "Premium brand collection",
    title: "Premium Brands",
    description: "Discover our curated brand selection",
  },
]

export function LifestyleGallery() {
  const [selectedImage, setSelectedImage] = useState(0)

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % lifestyleImages.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + lifestyleImages.length) % lifestyleImages.length)
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Lifestyle Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how our products fit seamlessly into your daily life and enhance every moment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lifestyleImages.map((image, index) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center">
                          <h3 className="font-semibold text-lg mb-2">{image.title}</h3>
                          <p className="text-sm">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0">
                <div className="relative">
                  <img
                    src={lifestyleImages[selectedImage].src || "/placeholder.svg"}
                    alt={lifestyleImages[selectedImage].alt}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />

                  {/* Navigation buttons */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>

                  {/* Image info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-6">
                    <h3 className="text-xl font-semibold mb-2">{lifestyleImages[selectedImage].title}</h3>
                    <p className="text-sm opacity-90">{lifestyleImages[selectedImage].description}</p>
                  </div>

                  {/* Thumbnails */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    {lifestyleImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === selectedImage ? "bg-white" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
