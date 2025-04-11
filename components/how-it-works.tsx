"use client"

import { motion } from "framer-motion"
import { CalendarCheck, Video, TrendingUp } from "lucide-react"

export function HowItWorks() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="how-it-works" className="py-20 bg-background-light relative">
      {/* Animated dots background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #3F88C5 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            opacity: 0.1,
          }}
        ></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform makes it easy to practice interviews and improve your skills with just three simple steps.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Step 1 */}
          <motion.div
            className="bg-white rounded-lg p-8 shadow-custom text-center relative overflow-hidden group"
            variants={item}
          >
            {/* Animated gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <motion.div
              className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <CalendarCheck className="h-8 w-8 text-primary" />
            </motion.div>

            <h3 className="text-xl font-bold mb-3 relative z-10">1. Book</h3>
            <p className="text-muted-foreground relative z-10">
              Schedule an interview session at your convenience. Choose your experience level and job role.
            </p>

            {/* Animated arrow */}
            <motion.div
              className="absolute -right-6 top-1/2 transform -translate-y-1/2 hidden md:block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary/30"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="bg-white rounded-lg p-8 shadow-custom text-center relative overflow-hidden group"
            variants={item}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <motion.div
              className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Video className="h-8 w-8 text-primary" />
            </motion.div>

            <h3 className="text-xl font-bold mb-3 relative z-10">2. Interview</h3>
            <p className="text-muted-foreground relative z-10">
              Join your virtual interview with our AI interviewer. Answer questions just like in a real interview.
            </p>

            {/* Animated arrow */}
            <motion.div
              className="absolute -right-6 top-1/2 transform -translate-y-1/2 hidden md:block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary/30"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="bg-white rounded-lg p-8 shadow-custom text-center relative overflow-hidden group"
            variants={item}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <motion.div
              className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <TrendingUp className="h-8 w-8 text-primary" />
            </motion.div>

            <h3 className="text-xl font-bold mb-3 relative z-10">3. Improve</h3>
            <p className="text-muted-foreground relative z-10">
              Receive detailed feedback on your performance and specific areas to improve for future interviews.
            </p>
          </motion.div>
        </motion.div>

        {/* Interactive demo button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium shadow-custom hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Video className="mr-2 h-5 w-5" />
            Watch Demo Interview
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
