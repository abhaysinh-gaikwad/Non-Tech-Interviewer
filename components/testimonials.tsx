"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Software Engineer at Google",
    content:
      "The AI interviewer asked me challenging questions that were very similar to my actual Google interview. The feedback helped me identify my weak areas and improve them before the real thing.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Patel",
    role: "Frontend Developer at Amazon",
    content:
      "I was nervous about technical interviews, but practicing with Non-Tech-Interviewer boosted my confidence. The detailed feedback on my communication skills was invaluable.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ananya Desai",
    role: "Product Manager at Flipkart",
    content:
      "As someone transitioning to product management, I needed practice with PM-specific questions. This platform provided exactly what I needed and helped me land my dream job.",
    rating: 4,
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Data Scientist at Microsoft",
    content:
      "The AI interviewer asked me relevant data science questions and provided constructive feedback on my approach to problem-solving. Highly recommended for DS/ML roles!",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleTestimonials = 3
  const maxIndex = testimonials.length - visibleTestimonials

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from professionals who improved their interview skills with our platform.
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleTestimonials)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full md:w-1/3 flex-shrink-0 px-4">
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <p className="mb-4">{testimonial.content}</p>
                      <div className="mt-auto">
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
