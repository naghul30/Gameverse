import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Gamepad2, Users, Star, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-b from-purple-900/20 to-gray-950">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Discover Hidden Indie Gems
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Uncover amazing indie games crafted by passionate developers. Your next favorite game is waiting to be
            discovered.
          </p>
          <Link href="/games">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold">
              <Gamepad2 className="mr-2 h-5 w-5" />
              Explore Games
            </Button>
          </Link>
        </div>
      </section>

      {/* Why GameVerse Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Why GameVerse?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800 hover:border-purple-500 transition-colors">
              <CardContent className="p-8 text-center">
                <Star className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Curated Content</h3>
                <p className="text-gray-400">
                  Every game is carefully selected and reviewed to ensure you discover only the highest quality indie
                  experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-purple-500 transition-colors">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Dev-First Platform</h3>
                <p className="text-gray-400">
                  Built by developers, for developers. We understand the indie game development journey and support
                  creators at every step.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-purple-500 transition-colors">
              <CardContent className="p-8 text-center">
                <Zap className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Free to Explore</h3>
                <p className="text-gray-400">
                  Discover amazing games without any barriers. Our platform is completely free for gamers and developers
                  alike.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Games Preview */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { name: "Pixel Quest", genre: "Adventure", image: "/placeholder.svg?height=200&width=300" },
              { name: "Neon Runner", genre: "Platformer", image: "/placeholder.svg?height=200&width=300" },
              { name: "Mystic Realms", genre: "RPG", image: "/placeholder.svg?height=200&width=300" },
            ].map((game, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-colors overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{game.name}</h3>
                  <p className="text-purple-400 text-sm mb-4">{game.genre}</p>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link href="/games">
              <Button
                variant="outline"
                size="lg"
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
              >
                View All Games
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
