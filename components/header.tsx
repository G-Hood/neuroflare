"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-black/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
        <Flame
            className="h-8 w-8 text-primary soft-glow"
            style={{
              WebkitMaskImage: "url('/path-to-your-png.png')",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              maskImage: "url('/path-to-your-png.png')",
              maskRepeat: "no-repeat",
              maskSize: "contain",
              backgroundColor: "transparent",
            }}
/>          <span className="text-xl font-bold rainbow-text">NeuroFlare</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/research" className="text-sm font-medium hover:text-primary transition-colors">
            Research
          </Link>
          <Link href="/projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="/stock" className="text-sm font-medium hover:text-primary transition-colors">
            Stock
          </Link>
          <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 transition-all hover:scale-105 soft-glow"
          >
            <a
              href="https://your-donation-website.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate
            </a>
          </Button>
        </nav>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && ( 
        <div className="md:hidden absolute w-full bg-black border-b border-border/40 py-4 animate-fade-in rounded-b-3xl">
          <nav className="container flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
              </Link>
            <Link
              href="/#about"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/research"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Research
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/stock"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Stock

            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 transition-all hover:scale-105 w-full soft-glow"
            >
              <a
                href="https://your-donation-website.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
