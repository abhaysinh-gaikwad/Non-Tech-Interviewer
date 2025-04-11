"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Software Engineer at Google",
    content:
      "The AI interviewer asked me challenging questions that were very similar to my actual Google interview. The feedback helped me identify my weak areas and improve them before the real thing.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    initials: "PS",
  },
  {
    id: 2,
    name: "Rahul Patel",
    role: "Frontend Developer at Amazon",
    content:
      "I was nervous about technical interviews, but practicing with No Tech Interviewer boosted my confidence. The detailed feedback on my communication skills was invaluable.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    initials: "RP",
  },
  {
    id: 3,
    name: "Ananya Desai",
    role: "Product Manager at Flipkart",
    content:
      "As someone transitioning to product management, I needed practice with PM-specific questions. This platform provided exactly what I needed and helped me land my dream job.",
    rating: 4,
    image: "/placeholder.svg?height=80&width=80",
    initials: "AD",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Data Scientist at Microsoft",
    content:
      "The AI interviewer asked me relevant data science questions and provided constructive feedback on my approach to problem-solving. Highly recommended for DS/ML roles!",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    initials: "VS",
  },
  {
    id: 5,
    name: "Neha Gupta",
    role: "Backend Developer at Swiggy",
    content:
      "The platform's feedback on my system design approach was eye-opening. I improved significantly after just three practice interviews and received multiple job offers.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    initials: "NG",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const maxIndex = testimonials.length - 1

  // For desktop view
  const visibleTestimonials = 3
  const maxDesktopIndex = testimonials.length - visibleTestimonials

  // For mobile view - featured testimonial
  const [activeMobileIndex, setActiveMobileIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxDesktopIndex))
    setActiveMobileIndex((prev) => (prev === maxIndex ? 0 : prev + 1))
    resetAutoplay()
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))
    setActiveMobileIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
    resetAutoplay()
  }

  const goToSlide = (index: number) => {
    setActiveMobileIndex(index)
    resetAutoplay()
  }

  const resetAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }

    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev === maxDesktopIndex ? 0 : Math.min(prev + 1, maxDesktopIndex)))
        setActiveMobileIndex((prev) => (prev === maxIndex ? 0 : prev + 1))
      }, 5000)
    }
  }

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev === maxDesktopIndex ? 0 : Math.min(prev + 1, maxDesktopIndex)))
        setActiveMobileIndex((prev) => (prev === maxIndex ? 0 : prev + 1))
      }, 5000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay, maxDesktopIndex, maxIndex])

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-64 -top-64 w-96 h-96 rounded-full bg-primary/5"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute -left-64 -bottom-64 w-96 h-96 rounded-full bg-secondary/5"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from professionals who improved their interview skills with our platform.
          </p>
        </motion.div>

        {/* Desktop Testimonials Carousel */}
        <div className="relative hidden md:block">
          <div className="overflow-hidden mx-auto max-w-6xl">
            <motion.div
              className="flex transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleTestimonials)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="w-1/3 flex-shrink-0 px-4"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full border-none shadow-custom hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Avatar className="h-12 w-12 mr-4 border-2 border-primary/20">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>

                      <div className="relative mb-4">
                        <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/20 rotate-180" />
                        <p className="pl-4">{testimonial.content}</p>
                      </div>

                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>

            <div className="flex items-center gap-2">
              {[...Array(maxDesktopIndex + 1)].map((_, idx) => (
                <motion.button
                  key={idx}
                  className={`w-2 h-2 rounded-full ${currentIndex === idx ? "bg-primary" : "bg-primary/30"}`}
                  onClick={() => {
                    setCurrentIndex(idx)
                    resetAutoplay()
                  }}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex >= maxDesktopIndex}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>

        {/* Mobile Testimonials Carousel */}
        <div className="md:hidden">
          <div className="relative px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMobileIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <Card className="border-none shadow-custom">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4 border-2 border-primary/20">
                        <AvatarImage
                          src={testimonials[activeMobileIndex].image}
                          alt={testimonials[activeMobileIndex].name}
                        />
                        <AvatarFallback>{testimonials[activeMobileIndex].initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold">{testimonials[activeMobileIndex].name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonials[activeMobileIndex].role}</p>
                      </div>
                    </div>

                    <div className="relative mb-4">
                      <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/20 rotate-180" />
                      <p className="pl-4">{testimonials[activeMobileIndex].content}</p>
                    </div>

                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < testimonials[activeMobileIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full z-10 bg-white/80 backdrop-blur-sm"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full z-10 bg-white/80 backdrop-blur-sm"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>

          <div className="flex justify-center mt-6 gap-1">
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                className={`w-2 h-2 rounded-full ${activeMobileIndex === idx ? "bg-primary" : "bg-primary/30"}`}
                onClick={() => goToSlide(idx)}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Autoplay toggle */}
        <div className="flex justify-center mt-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setAutoplay(!autoplay)}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            {autoplay ? "Pause Autoplay" : "Enable Autoplay"}
          </Button>
        </div>
      </div>
    </section>
  )
}
