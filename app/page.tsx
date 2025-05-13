import Hero from "@/components/hero"
import Programs from "@/components/programs"
import About from "@/components/about"
import Team from "@/components/team"
import Support from "@/components/support"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Programs />
      <About />
      <Team />
      <Support />
      <Contact />
    </main>
  )
}
