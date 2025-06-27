"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Mail, MessageCircle, HelpCircle } from "lucide-react"

const faqData = [
  {
    question: "How do I submit my game to GameVerse?",
    answer:
      "Visit our Submit Game page and fill out the submission form with your game details, screenshots, and description. We review all submissions within 5-7 business days.",
  },
  {
    question: "Is GameVerse free for developers?",
    answer:
      "Yes! GameVerse is completely free for indie developers. We believe in supporting the indie game community without any barriers.",
  },
  {
    question: "What types of games do you feature?",
    answer:
      "We feature all types of indie games across various genres - from platformers and RPGs to puzzle games and experimental titles. Quality and creativity are our main criteria.",
  },
  {
    question: "How can I get my game featured on the homepage?",
    answer:
      "Games are selected for homepage featuring based on quality, uniqueness, and community engagement. Focus on creating an amazing game with great visuals and compelling gameplay.",
  },
  {
    question: "Can I update my game information after submission?",
    answer:
      "Yes, you can contact us anytime to update your game information, screenshots, or description. We want to ensure your game is presented in the best possible way.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder for form submission
    console.log("Contact form submission:", formData)
    alert("Thank you for your message! We'll get back to you within 24 hours.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Mail className="h-16 w-16 text-purple-400 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-400">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-2 text-purple-400" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="bg-gray-800 border-gray-700 text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="bg-gray-800 border-gray-700 text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    className="bg-gray-800 border-gray-700 text-white min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Other Ways to Reach Us</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p>hello@gameverse.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Response Time</h4>
                    <p>We typically respond within 24 hours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Business Hours</h4>
                    <p>Monday - Friday, 9 AM - 6 PM PST</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">For Developers</h3>
                <p className="text-gray-300 mb-4">
                  Have questions about submitting your game or need technical support? We're here to help indie
                  developers succeed.
                </p>
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                >
                  Developer Resources
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <HelpCircle className="h-6 w-6 mr-2 text-purple-400" />
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-800 pb-6 last:border-b-0 last:pb-0">
                  <h3 className="text-lg font-semibold mb-3 text-white">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
