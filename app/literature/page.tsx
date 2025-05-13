import { Book, BookOpen, FileText, Library } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Literature() {
  const publications = [
    {
      title: "Neural Network Advancements in Cognitive Science",
      description:
        "A comprehensive review of recent developments in neural networks and their applications in cognitive science research.",
      type: "Research Paper",
      date: "June 2023",
      icon: <FileText className="h-8 w-8 text-primary" />,
    },
    {
      title: "The Future of Brain-Computer Interfaces",
      description:
        "Exploring the potential of BCI technology and its implications for human-computer interaction in the next decade.",
      type: "White Paper",
      date: "March 2023",
      icon: <Book className="h-8 w-8 text-accent" />,
    },
    {
      title: "Neuroplasticity and Learning: New Perspectives",
      description:
        "Examining how our understanding of neuroplasticity is reshaping educational approaches and learning methodologies.",
      type: "Journal Article",
      date: "November 2022",
      icon: <BookOpen className="h-8 w-8 text-purple-400" />,
    },
    {
      title: "Ethical Considerations in Neurotechnology",
      description:
        "Addressing the ethical challenges and considerations in the rapidly evolving field of neurotechnology.",
      type: "Position Paper",
      date: "September 2022",
      icon: <Library className="h-8 w-8 text-blue-400" />,
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="bg-black section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Literature</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our collection of research papers, articles, and publications on neuroscience, technology, and
              their intersection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publications.map((pub, index) => (
              <Card key={index} className="modern-card bg-card border-border/50 hover:border-primary/50 transition-all">
                <CardHeader className="rounded-t-3xl">
                  <div className="flex justify-between items-start">
                    <div className="mb-4 bg-black/50 p-4 rounded-full inline-block">{pub.icon}</div>
                    <span className="text-sm text-gray-400">{pub.date}</span>
                  </div>
                  <CardTitle>{pub.title}</CardTitle>
                  <span className="text-xs text-primary">{pub.type}</span>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">{pub.description}</CardDescription>
                  <div className="mt-4">
                    <a href="#" className="text-primary hover:text-primary/80 text-sm font-medium">
                      Read More →
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
              View All Publications
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
