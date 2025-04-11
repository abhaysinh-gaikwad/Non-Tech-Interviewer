import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarDays, MessageSquare, BarChart3 } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10 z-0"></div>

      {/* Floating Icons */}
      <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 opacity-10 animate-float">
        <CalendarDays size={80} className="text-primary" />
      </div>
      <div
        className="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2 opacity-10 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <MessageSquare size={60} className="text-secondary" />
      </div>
      <div
        className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2 translate-y-1/2 opacity-10 animate-float"
        style={{ animationDelay: "4s" }}
      >
        <BarChart3 size={70} className="text-primary" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Master Interviews with AI-Powered Feedback
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Practice technical interviews with our AI interviewer, receive personalized feedback, and improve your
            skills to land your dream job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
