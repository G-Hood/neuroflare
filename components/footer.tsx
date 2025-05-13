import Link from "next/link"
import Image from "next/image" // Import the Image component
import { Facebook, Twitter, Instagram, Linkedin, Github, Flame } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-border/40 rounded-t-3xl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="rounded-full bg-accent p-1">
                <div className="rounded-full bg-black p-1 flex items-center justify-center">
                  <Image
                    src="/flame_icon.png" // Path to the image in the public folder
                    alt="NeuroFlare Logo"
                    width={24}
                    height={24}
                    className="soft-glow"
                  />
                </div>
              </div>
              <span className="text-xl font-bold">NeuroFlare</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Empowering communities through technology education, access, and opportunity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors bg-white/10 p-2 rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors bg-white/10 p-2 rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors bg-white/10 p-2 rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors bg-white/10 p-2 rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors bg-white/10 p-2 rounded-full">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 gradient-border inline-block pb-1">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Code Academy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Tech Access Initiative
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Mentor Connect
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Innovation Lab
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Community Workshops
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 gradient-border inline-block pb-1">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Board of Directors
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Annual Reports
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 gradient-border inline-block pb-1">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Corporate Partnerships
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NeuroFlare. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
