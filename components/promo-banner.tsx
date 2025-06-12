import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PromoBanner() {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Summer Collection 2024</h2>
            <p className="text-muted-foreground text-lg">
              Discover our latest arrivals perfect for the summer season. Limited time offers with up to 40% off on
              selected items.
            </p>
            <Button size="lg" asChild>
              <Link href="/products?collection=summer">Shop the Collection</Link>
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="/images/summer-banner.jpg"
              alt="Summer Collection"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
