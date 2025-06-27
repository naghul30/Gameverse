"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, GamepadIcon } from "lucide-react"

export default function SubmitGamePage() {
  const [formData, setFormData] = useState({
    gameName: "",
    developerName: "",
    genre: "",
    description: "",
    screenshot: null as File | null,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder for form submission
    console.log("Game submission:", formData)
    alert("Thank you for your submission! We'll review your game and get back to you soon.")
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, screenshot: file }))
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <GamepadIcon className="h-16 w-16 text-purple-400 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Submit Your Indie Game</h1>
          <p className="text-xl text-gray-400">
            Share your creation with the GameVerse community and get discovered by players worldwide
          </p>
        </div>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Game Submission Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="gameName">Game Name *</Label>
                <Input
                  id="gameName"
                  type="text"
                  placeholder="Enter your game's name"
                  value={formData.gameName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, gameName: e.target.value }))}
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="developerName">Developer Name *</Label>
                <Input
                  id="developerName"
                  type="text"
                  placeholder="Your name or studio name"
                  value={formData.developerName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, developerName: e.target.value }))}
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="genre">Genre *</Label>
                <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, genre: value }))}>
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Select a genre" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="action">Action</SelectItem>
                    <SelectItem value="adventure">Adventure</SelectItem>
                    <SelectItem value="platformer">Platformer</SelectItem>
                    <SelectItem value="puzzle">Puzzle</SelectItem>
                    <SelectItem value="rpg">RPG</SelectItem>
                    <SelectItem value="shooter">Shooter</SelectItem>
                    <SelectItem value="racing">Racing</SelectItem>
                    <SelectItem value="strategy">Strategy</SelectItem>
                    <SelectItem value="simulation">Simulation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Game Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Tell us about your game - what makes it special, key features, gameplay mechanics..."
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  className="bg-gray-800 border-gray-700 text-white min-h-[120px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="screenshot">Upload Screenshot</Label>
                <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center hover:border-purple-500 transition-colors">
                  <input id="screenshot" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                  <label htmlFor="screenshot" className="cursor-pointer">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400 mb-2">
                      {formData.screenshot ? formData.screenshot.name : "Click to upload a screenshot"}
                    </p>
                    <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg font-semibold"
              >
                Submit Your Indie Game
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Submission Guidelines */}
        <Card className="bg-gray-900 border-gray-800 mt-8">
          <CardHeader>
            <CardTitle>Submission Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-300">
            <ul className="space-y-2">
              <li>• Games must be original indie creations</li>
              <li>• Provide clear, high-quality screenshots</li>
              <li>• Include detailed game descriptions</li>
              <li>• We review all submissions within 5-7 business days</li>
              <li>• Selected games will be featured on our platform</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
