"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image" // Import the Image component
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-black/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="rounded-full bg-accent p-1">
            <div className="rounded-full bg-transparent p-1 flex items-center justify-center">
              <Image
                src="/flame_icon.png" // Path to the image in the public folder
                alt="NeuroFlare Logo"
                width={24}
                height={24}
                className="soft-glow"
                style={{ backgroundColor: 'transparent' }} // Ensure the image background is transparent
              />
            </div>
          </div>
          <span className="text-xl font-bold">NeuroFlare</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#programs" className="text-sm font-medium hover:text-primary transition-colors">
            Programs
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#team" className="text-sm font-medium hover:text-primary transition-colors">
            Team
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
          <Button className="bg-primary hover:bg-primary/90 transition-all hover:scale-105 soft-glow">Donate</Button>
        </nav>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-black border-b border-border/40 py-4 animate-fade-in rounded-b-3xl">
          <nav className="container flex flex-col space-y-4">
            <Link
              href="#programs"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#team"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-primary hover:bg-primary/90 transition-all hover:scale-105 w-full soft-glow">
              Donate
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
