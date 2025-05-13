import { Code, Laptop, Users, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Programs() {
  const programs = [
    {
      title: "Code Academy",
      description:
        "Free coding bootcamps for underrepresented groups in tech, teaching modern web development, mobile apps, and data science.",
      icon: <Code className="h-12 w-12 text-primary" />,
    },
    {
      title: "Tech Access Initiative",
      description:
        "Providing refurbished computers, internet access, and technical support to low-income families and educational institutions.",
      icon: <Laptop className="h-12 w-12 text-accent" />,
    },
    {
      title: "Mentor Connect",
      description:
        "Matching industry professionals with aspiring technologists for one-on-one mentorship, career guidance, and project collaboration.",
      icon: <Users className="h-12 w-12 text-purple-400" />,
    },
    {
      title: "Innovation Lab",
      description:
        "Community spaces equipped with cutting-edge technology where people can learn, create, and collaborate on tech projects.",
      icon: <Lightbulb className="h-12 w-12 text-primary" />,
    },
  ]

  return (
    <section id="programs" className="bg-gradient-to-b from-black to-secondary/30 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're tackling the digital divide through multiple initiatives designed to provide access, education, and
            opportunities in technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="modern-card bg-card border-border/50 hover:border-primary/50 transition-all">
              <CardHeader className="rounded-t-3xl">
                <div className="mb-4 bg-black/50 p-4 rounded-full inline-block">{program.icon}</div>
                <CardTitle>{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">{program.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="bg-black px-8 py-3 rounded-full border border-primary/30 hover:border-primary/60 transition-all hover:scale-105 soft-glow"
          >
            View All Programs
          </a>
        </div>
      </div>
    </section>
  )
}
