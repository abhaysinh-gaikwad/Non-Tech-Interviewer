"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CalendarDays, MessageSquare, BarChart3, Code, Cpu, Database } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Gradient Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-secondary/30 to-transparent"
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Icons with staggered animations */}
      <motion.div
        className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 opacity-10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <CalendarDays size={80} className="text-primary" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2 opacity-10"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      >
        <MessageSquare size={60} className="text-secondary" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2 translate-y-1/2 opacity-10"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 2,
        }}
      >
        <BarChart3 size={70} className="text-primary" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/3 transform translate-x-1/2 translate-y-1/2 opacity-10"
        animate={{
          y: [0, -18, 0],
          rotate: [0, -7, 0],
        }}
        transition={{
          duration: 7.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1.5,
        }}
      >
        <Code size={65} className="text-secondary" />
      </motion.div>

      <motion.div
        className="absolute top-2/3 right-1/5 transform translate-x-1/2 -translate-y-1/2 opacity-10"
        animate={{
          y: [0, -22, 0],
          rotate: [0, 6, 0],
        }}
        transition={{
          duration: 6.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 0.8,
        }}
      >
        <Cpu size={55} className="text-primary" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/6 transform -translate-x-1/2 -translate-y-1/2 opacity-10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, -4, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 2.5,
        }}
      >
        <Database size={50} className="text-secondary" />
      </motion.div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="inline-block">Master Interviews with</span>{" "}
              <span className="inline-block relative">
                <span className="relative z-10">AI-Powered Feedback</span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-secondary/30 z-0 rounded-sm"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Practice technical interviews with our AI interviewer, receive personalized feedback, and improve your
            skills to land your dream job.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/register">
              <Button size="lg" className="w-full sm:w-auto group relative overflow-hidden">
                <span className="relative z-10">Get Started</span>
                <motion.span
                  className="absolute inset-0 bg-secondary z-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button size="lg" variant="outline" className="w-full sm:w-auto group">
                <span>Learn More</span>
                <motion.span
                  className="inline-block ml-2"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Animated stats counter */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center shadow-custom">
            <motion.div
              className="text-3xl font-bold text-primary mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1.2 }}
            >
              5,000+
            </motion.div>
            <p className="text-sm text-muted-foreground">Interviews Conducted</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center shadow-custom">
            <motion.div
              className="text-3xl font-bold text-primary mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1.4 }}
            >
              92%
            </motion.div>
            <p className="text-sm text-muted-foreground">Success Rate</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center shadow-custom">
            <motion.div
              className="text-3xl font-bold text-primary mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1.6 }}
            >
              200+
            </motion.div>
            <p className="text-sm text-muted-foreground">Companies Hiring</p>
          </div>
        </motion.div>
      </div>

      {/* Animated wave divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="#f4f4f4"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,256L48,240C96,224,192,192,288,197.3C384,203,480,245,576,261.3C672,277,768,267,864,234.7C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    </section>
  )
}
