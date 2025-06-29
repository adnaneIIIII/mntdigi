import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const portfolioItems = [
  {
    id: 1,
    image: "/1.webp?height=300&width=400",
    client: "Car Rental Co.",
    description: "Increased engagement by 340% through strategic content creation and community management.",
    tags: ["Instagram", "LinkedIn", "Content Strategy"],
  },
  {
    id: 2,
    image: "/2.png?height=300&width=400",
    client: "tikTok Page Growth",
    description: "Viral TikTok campaign generated 2.3M views and drove 150% increase in foot traffic.",
    tags: ["TikTok", "Reels", "Food Marketing"],
  },
  {
    id: 3,
    image: "/3.jpg?height=300&width=400",
    client: "Makeup Brand",
    description: "Influencer partnerships and targeted ads resulted in 280% ROI within 3 months.",
    tags: ["Instagram Ads", "Influencer Marketing", "Fashion"],
  }
]

export default function PortfolioSection() {
  return (
    <section className="  py-16 px-4 sm:px-6 lg:px-8" id="portfolio">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Work</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Take a look at some of the brands we've elevated</p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={`${item.client} portfolio`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {item.client}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{item.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-gray-700 text-gray-200 hover:bg-blue-600 hover:text-white transition-colors duration-300 text-xs px-3 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="  px-8 py-3 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            See More Work
          </Button>
        </div>
      </div>
    </section>
  )
}
