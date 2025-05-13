import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="bg-black section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              Founded in 2015, TechForward is dedicated to democratizing access to technology and digital skills. We
              believe that everyone, regardless of background or economic status, deserves the opportunity to
              participate in and benefit from the digital economy.
            </p>
            <p className="text-gray-300 mb-6">
              Our organization works at the intersection of technology and social impact, creating programs that address
              the root causes of digital inequality while building pathways to opportunity.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary mt-1 mr-3 flex-shrink-0 soft-glow"></div>
                <p className="text-gray-300">
                  <span className="font-semibold">Inclusive Access:</span> We ensure technology and education are
                  available to everyone, with a focus on underserved communities.
                </p>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-accent mt-1 mr-3 flex-shrink-0 soft-glow"></div>
                <p className="text-gray-300">
                  <span className="font-semibold">Quality Education:</span> Our curriculum is designed by industry
                  experts to provide relevant, cutting-edge skills.
                </p>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-purple-400 mt-1 mr-3 flex-shrink-0 soft-glow"></div>
                <p className="text-gray-300">
                  <span className="font-semibold">Community Impact:</span> We measure success by the tangible
                  improvements in the communities we serve.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur opacity-75"></div>
            <div className="relative bg-black rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="Our mission in action"
                width={800}
                height={800}
                className="w-full h-auto"
              />
            </div>

            <div className="absolute -bottom-8 -right-8 bg-black p-6 rounded-2xl border border-white/10 max-w-xs modern-card">
              <p className="text-xl font-bold mb-2 gradient-text">Our Impact</p>
              <p className="text-gray-300 text-sm">
                "TechForward's programs have transformed our school. Our students now have access to technology and
                skills that were previously out of reach."
              </p>
              <p className="text-gray-400 text-xs mt-2">— Maria Rodriguez, School Principal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
