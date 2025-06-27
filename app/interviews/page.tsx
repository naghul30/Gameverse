import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User } from "lucide-react"

const interviewsData = [
  {
    id: 1,
    developer: "Alex Chen",
    game: "Pixel Quest",
    gameImage: "/placeholder.svg?height=80&width=80",
    excerpt:
      "From bedroom coder to indie success: How I built Pixel Quest in my spare time and found an audience of thousands...",
    date: "2024-01-15",
    readTime: "8 min read",
  },
  {
    id: 2,
    developer: "Sarah Martinez",
    game: "Neon Runner",
    gameImage: "/placeholder.svg?height=80&width=80",
    excerpt:
      "The challenges of creating a cyberpunk aesthetic on a shoestring budget and the creative solutions that emerged...",
    date: "2024-01-10",
    readTime: "12 min read",
  },
  {
    id: 3,
    developer: "Mike Thompson",
    game: "Mystic Realms",
    gameImage: "/placeholder.svg?height=80&width=80",
    excerpt: "Building an RPG as a solo developer: The tools, techniques, and mindset that made it possible...",
    date: "2024-01-05",
    readTime: "15 min read",
  },
  {
    id: 4,
    developer: "Emma Wilson",
    game: "Space Drifter",
    gameImage: "/placeholder.svg?height=80&width=80",
    excerpt:
      "From concept to Steam: My journey creating a space shooter that captures the essence of classic arcade games...",
    date: "2023-12-28",
    readTime: "10 min read",
  },
  {
    id: 5,
    developer: "David Kim",
    game: "Puzzle Master",
    gameImage: "/placeholder.svg?height=80&width=80",
    excerpt: "The psychology of puzzle design: How I create challenges that are frustrating in all the right ways...",
    date: "2023-12-20",
    readTime: "7 min read",
  },
  {
    id: 6,
    developer: "Lisa Rodriguez",
    game: "Forest Guardian",
    gameImage: "/placeholder.svg?height=80&width=80",
    excerpt: "Environmental storytelling in indie games: Creating narrative through world design and subtle details...",
    date: "2023-12-15",
    readTime: "11 min read",
  },
]

export default function InterviewsPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Developer Interviews</h1>
          <p className="text-xl text-gray-400">Dive deep into the creative minds behind your favorite indie games</p>
        </div>

        <div className="space-y-8">
          {interviewsData.map((interview) => (
            <Card key={interview.id} className="bg-gray-900 border-gray-800 hover:border-purple-500 transition-colors">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg"></div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">{interview.developer}</h3>
                        <div className="flex items-center text-purple-400 text-sm mb-2">
                          <User className="h-4 w-4 mr-1" />
                          <span>Creator of {interview.game}</span>
                        </div>
                      </div>

                      <div className="flex flex-col md:items-end text-sm text-gray-400">
                        <div className="flex items-center mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{new Date(interview.date).toLocaleDateString()}</span>
                        </div>
                        <span>{interview.readTime}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{interview.excerpt}</p>

                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">Read More</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
          >
            Load More Interviews
          </Button>
        </div>
      </div>
    </div>
  )
}
