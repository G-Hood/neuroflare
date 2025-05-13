import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Team() {
  const team = [
    {
      name: "Alex Johnson",
      role: "Executive Director",
      bio: "Former tech executive with 15+ years experience, passionate about using technology for social good.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Maya Patel",
      role: "Education Director",
      bio: "Computer science professor and curriculum developer specializing in accessible tech education.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "David Kim",
      role: "Technology Director",
      bio: "Software engineer and open source advocate focused on building scalable technology solutions.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Sophia Rodriguez",
      role: "Community Outreach",
      bio: "Community organizer with deep connections to underserved neighborhoods and educational institutions.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <section id="team" className="bg-gradient-to-b from-secondary/30 to-black section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Meet the passionate individuals driving our mission forward, combining expertise in technology, education,
            and community development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group modern-card overflow-hidden">
              <div className="relative mb-4 overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a href="#" className="bg-black p-2 rounded-full hover:bg-white/10 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-black p-2 rounded-full hover:bg-white/10 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-black p-2 rounded-full hover:bg-white/10 transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-4">
            We're always looking for passionate individuals to join our team and help further our mission.
          </p>
          <a
            href="#"
            className="bg-black px-8 py-3 rounded-full border border-primary/30 hover:border-primary/60 transition-all hover:scale-105 soft-glow"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </section>
  )
}
