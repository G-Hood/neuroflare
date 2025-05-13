"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="bg-gradient-to-b from-black to-secondary/30 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions about our programs or want to get involved? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="modern-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-card border-border/50 focus:border-primary/50 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-card border-border/50 focus:border-primary/50 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-card border-border/50 focus:border-primary/50 transition-colors"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 transition-all hover:scale-105 soft-glow"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {isSubmitted && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-center">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div className="modern-card p-6">
              <h3 className="text-xl font-bold mb-4 gradient-text">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    United States
                    <p className="text-gray-300"></p>
                    <p className="text-gray-300"></p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <a href="mailto:neuroflareorg@gmail.com" className="text-gray-300 hover:text-primary transition-colors">
                    neuroflareorg@gmail.com
                  </a>
                  <Button
                    onClick={() => navigator.clipboard.writeText("neuroflareorg@gmail.com")}
                    className="ml-3 bg-primary hover:bg-primary/90 text-sm px-3 py-1 rounded-lg transition-all"
                  >
                    Copy
                  </Button>
                </div>

                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <a href="tel:" className="text-gray-300 hover:text-primary transition-colors">
                    NA
                  </a>
                </div>
              </div>
            </div>

            <div className="modern-card p-6 soft-glow">
              <h3 className="text-xl font-bold mb-4 gradient-text">Newsletter</h3>
              <p className="text-gray-300 mb-4">
                Subscribe to our newsletter to stay updated on our programs, events, and impact stories.
              </p>
              <div className="flex gap-2">
                <Input
                  placeholder="Your email address"
                  type="email"
                  className="bg-black border-border/50 focus:border-primary/50 transition-colors"
                />
                <Button className="bg-primary hover:bg-primary/90 transition-all hover:scale-105 soft-glow">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
