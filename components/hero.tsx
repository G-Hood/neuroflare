import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black section-padding">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
          Empowering Communities Through <span className="gradient-text">Technology</span>
        </h1>

        <p
          className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          We're bridging the digital divide by providing tech education, resources, and opportunities to underserved
          communities around the world.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <Button className="bg-primary hover:bg-primary/90 transition-all hover:scale-105 text-lg px-8 py-6 soft-glow animate-pulse-glow">
            Get Involved
          </Button>
          <Button
            variant="outline"
            className="border-white/20 hover:bg-white/10 transition-all hover:scale-105 text-lg px-8 py-6"
          >
            Learn More
          </Button>
        </div>

        <div className="mt-16 relative w-full max-w-4xl animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="absolute -inset-0.5 bg-primary/20 rounded-3xl blur opacity-75"></div>
          <div className="relative bg-black rounded-3xl overflow-hidden border border-white/10">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Tech education in action"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex flex-col items-center modern-card p-6 floating-element">
            <span className="text-3xl md:text-4xl font-bold gradient-text">50+</span>
            <span className="text-sm text-gray-400 mt-2">Communities Served</span>
          </div>
          <div className="flex flex-col items-center modern-card p-6 floating-element" style={{ animationDelay: "1s" }}>
            <span className="text-3xl md:text-4xl font-bold gradient-text">10k+</span>
            <span className="text-sm text-gray-400 mt-2">Students Taught</span>
          </div>
          <div className="flex flex-col items-center modern-card p-6 floating-element" style={{ animationDelay: "2s" }}>
            <span className="text-3xl md:text-4xl font-bold gradient-text">200+</span>
            <span className="text-sm text-gray-400 mt-2">Volunteer Mentors</span>
          </div>
          <div className="flex flex-col items-center modern-card p-6 floating-element" style={{ animationDelay: "3s" }}>
            <span className="text-3xl md:text-4xl font-bold gradient-text">15</span>
            <span className="text-sm text-gray-400 mt-2">Countries Reached</span>
          </div>
        </div>
      </div>
    </section>
  )
}
