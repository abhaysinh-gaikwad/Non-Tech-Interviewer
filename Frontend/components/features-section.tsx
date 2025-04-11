"use client"

import { motion } from "framer-motion"
import { Brain, BarChart, Video, MessageSquare, Clock, Zap } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Interviews",
      description:
        "Our advanced AI simulates real interview scenarios with personalized questions based on your experience level and target role.",
    },
    {
      icon: BarChart,
      title: "Detailed Analytics",
      description: "Receive comprehensive performance metrics and identify your strengths and areas for improvement.",
    },
    {
      icon: Video,
      title: "Interview Recordings",
      description: "Review your interview recordings to analyze your body language, tone, and communication style.",
    },
    {
      icon: MessageSquare,
      title: "Personalized Feedback",
      description: "Get actionable insights and specific recommendations to improve your interview performance.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book interviews at your convenience, 24/7, without the constraints of human availability.",
    },
    {
      icon: Zap,
      title: "Rapid Improvement",
      description: "Practice regularly and track your progress over time to quickly enhance your interview skills.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform offers everything you need to master technical interviews and land your dream job.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow group"
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
