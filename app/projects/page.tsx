import Image from "next/image"
import { Brain, Cpu, Network, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Projects() {
  const projects = [
    {
      title: "ReWind",
      description:
        "A low-cost smart watch, with a simple interface and widgets for managing executive function.",
      status: "Ongoing",
      progress: 10,
      image: "/placeholder.svg?height=400&width=600",
      icon: <Zap className="h-8 w-8 text-primary" />,
    },
    {
      title: "Yggdrasil",
      description:
        "A tool for the reframing of education and learning into a more engaging format which allows for curiosity and the mind to wander.",
      status: "Ongoing",
      progress: 10,
      image: "/placeholder.svg?height=400&width=600",
      icon: <Brain className="h-8 w-8 text-accent" />,
    },
    {
      title: "Neuromorphic Computing Platform",
      description:
        "Building computing systems that mimic the structure and function of the human brain for more efficient AI applications.",
      status: "Development",
      progress: 78,
      image: "/placeholder.svg?height=400&width=600",
      icon: <Cpu className="h-8 w-8 text-purple-400" />,
    },
    {
      title: "Global Neuroscience Network",
      description:
        "Creating an international collaboration platform for neuroscientists to share data, methodologies, and findings.",
      status: "Planning",
      progress: 25,
      image: "/placeholder.svg?height=400&width=600",
      icon: <Network className="h-8 w-8 text-blue-400" />,
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="bg-black section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover our innovative research and development projects at the intersection of neuroscience and
              technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="modern-card bg-card border-border/50 hover:border-primary/50 transition-all overflow-hidden"
              >
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-full text-xs">
                    {project.status}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-black/50 p-3 rounded-full">{project.icon}</div>
                    <CardTitle>{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 mb-4">{project.description}</CardDescription>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-gray-400">Progress</span>
                    <span className="text-xs text-gray-400">{project.progress}%</span>
                  </div>
                  <div className="mt-4">
                    <a href="#" className="text-primary hover:text-primary/80 text-sm font-medium">
                      Learn More →
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="#"
              className="bg-black px-8 py-3 rounded-full border border-primary/30 hover:border-primary/60 transition-all hover:scale-105 soft-glow"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
