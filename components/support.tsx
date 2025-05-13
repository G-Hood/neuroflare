import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Gift, Users, Calendar } from "lucide-react"

export default function Support() {
  const supportOptions = [
    {
      title: "Make a Donation",
      description: "Your financial support helps us expand our programs and reach more communities in need.",
      icon: <Heart className="h-8 w-8 text-purple-400" />,
      action: "Donate Now",
    },
    {
      title: "Corporate Partnerships",
      description: "Partner with us to create meaningful social impact while achieving your CSR goals.",
      icon: <Gift className="h-8 w-8 text-accent" />,
      action: "Become a Partner",
    },
    {
      title: "Volunteer Your Skills",
      description: "Share your expertise as a mentor, teacher, or technical advisor in our programs.",
      icon: <Users className="h-8 w-8 text-primary" />,
      action: "Volunteer",
    },
    {
      title: "Attend an Event",
      description: "Join our fundraisers, tech talks, and community events to support our cause.",
      icon: <Calendar className="h-8 w-8 text-blue-400" />,
      action: "See Events",
    },
  ]

  return (
    <section id="support" className="bg-black section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Our Mission</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            There are many ways to contribute to our work and help us create a more equitable digital future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {supportOptions.map((option, index) => (
            <Card key={index} className="modern-card bg-card border-border/50 hover:border-primary/50 transition-all">
              <CardContent className="p-6 flex flex-col md:flex-row items-start gap-4">
                <div className="bg-black/50 p-4 rounded-full">{option.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                  <p className="text-gray-400 mb-4">{option.description}</p>
                  <Button className="bg-primary hover:bg-primary/90 transition-all hover:scale-105 soft-glow rounded-full">
                    {option.action}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl border border-white/10 bg-gradient-to-r from-black to-secondary/20 soft-glow animate-pulse-glow">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-2">Monthly Giving Program</h3>
              <p className="text-gray-300">
                Join our community of monthly donors to provide sustainable support for our programs. Even $10 a month
                makes a significant difference in our ability to plan and grow our impact.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Button className="bg-primary hover:bg-primary/90 transition-all hover:scale-105 px-8 py-6 text-lg soft-glow rounded-full">
                Become a Monthly Donor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
