"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"

const gamesData = [
  {
    id: 1,
    name: "Pixel Quest",
    genre: "Adventure",
    developer: "Indie Studios",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Neon Runner",
    genre: "Platformer",
    developer: "Cyber Games",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Mystic Realms",
    genre: "RPG",
    developer: "Fantasy Forge",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Space Drifter",
    genre: "Shooter",
    developer: "Cosmic Dev",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    name: "Puzzle Master",
    genre: "Puzzle",
    developer: "Brain Games",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    name: "Forest Guardian",
    genre: "Adventure",
    developer: "Nature Studios",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 7,
    name: "Retro Racer",
    genre: "Racing",
    developer: "Speed Labs",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 8,
    name: "Shadow Ninja",
    genre: "Action",
    developer: "Stealth Games",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 9,
    name: "Crystal Caves",
    genre: "Platformer",
    developer: "Underground Dev",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function GamesPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "")
  const [filteredGames, setFilteredGames] = useState(gamesData)

  useEffect(() => {
    const query = searchParams.get("q") || ""
    setSearchQuery(query)

    if (query) {
      const filtered = gamesData.filter(
        (game) =>
          game.name.toLowerCase().includes(query.toLowerCase()) ||
          game.genre.toLowerCase().includes(query.toLowerCase()) ||
          game.developer.toLowerCase().includes(query.toLowerCase()),
      )
      setFilteredGames(filtered)
    } else {
      setFilteredGames(gamesData)
    }
  }, [searchParams])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (searchQuery) {
      params.set("q", searchQuery)
    }
    router.push(`/games?${params.toString()}`)
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Indie Games Collection</h1>
          <p className="text-xl text-gray-400 mb-8">Explore our curated collection of amazing indie games</p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search games, genres, or developers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
          </form>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map((game) => (
            <Card
              key={game.id}
              className="bg-gray-900 border-gray-800 hover:border-purple-500 transition-colors overflow-hidden group"
            >
              <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{game.name}</h3>
                <p className="text-purple-400 text-sm mb-1">{game.genre}</p>
                <p className="text-gray-400 text-sm mb-4">by {game.developer}</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">No games found matching your search.</p>
            <Button
              variant="outline"
              className="mt-4 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
              onClick={() => {
                setSearchQuery("")
                router.push("/games")
              }}
            >
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
