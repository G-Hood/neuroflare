import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Stock() {
  const stock = [
    {
      title: "NeuroSense™ Headband",
      description:
        "A non-invasive EEG headband for real-time brain activity monitoring, meditation assistance, and cognitive training.",
      price: "$299.99",
      image: "/placeholder.svg?height=400&width=400",
      features: ["8-channel EEG", "10+ hour battery", "Mobile app integration", "Sleep tracking"],
      badge: "Best Seller",
    },
    {
      title: "CogniFocus™ System",
      description:
        "A neurofeedback system designed to improve focus, attention, and cognitive performance through guided training sessions.",
      price: "$449.99",
      image: "/placeholder.svg?height=400&width=400",
      features: ["Personalized training", "Progress tracking", "Cloud data storage", "Professional dashboard"],
      badge: "New",
    },
    {
      title: "BrainWave™ Developer Kit",
      description:
        "A comprehensive toolkit for developers and researchers to build brain-computer interface applications and experiments.",
      price: "$599.99",
      image: "/placeholder.svg?height=400&width=400",
      features: ["Open API", "Hardware SDK", "Sample applications", "Community support"],
      badge: null,
    },
    {
      title: "NeuroCalm™ Meditation Assistant",
      description:
        "A specialized device for meditation practitioners to monitor and improve their mental states during practice.",
      price: "$199.99",
      image: "/placeholder.svg?height=400&width=400",
      features: ["Real-time feedback", "Guided sessions", "State tracking", "Progress reports"],
      badge: "Popular",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="bg-black section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Stock</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Cutting-edge neurotechnology products designed to enhance cognitive performance, monitor brain activity,
              and improve mental wellbeing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stock.map((stock, index) => (
              <Card
                key={index}
                className="modern-card bg-card border-border/50 hover:border-primary/50 transition-all h-full flex flex-col"
              >
                <div className="relative">
                  {stock.badge && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs z-10">
                      {stock.badge}
                    </div>
                  )}
                  <div className="p-6 flex justify-center">
                    <Image
                      src={stock.image || "/placeholder.svg"}
                      alt={stock.title}
                      width={200}
                      height={200}
                      className="object-contain h-48"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{stock.title}</CardTitle>
                  <div className="text-xl font-bold text-primary">{stock.price}</div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-400 mb-4">{stock.description}</CardDescription>
                  <ul className="space-y-2">
                    {stock.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="mr-2 text-primary">•</span> {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary hover:bg-primary/90 transition-all hover:scale-105 soft-glow">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="#"
              className="bg-black px-8 py-3 rounded-full border border-primary/30 hover:border-primary/60 transition-all hover:scale-105 soft-glow"
            >
              View All Stock
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
