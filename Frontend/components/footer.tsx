"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export function Footer() {
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
    <footer className="bg-primary text-primary-foreground py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-32 -bottom-32 w-64 h-64 rounded-full bg-secondary/10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute -left-32 -top-32 w-64 h-64 rounded-full bg-white/5"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={item}>
            <h3 className="text-lg font-bold mb-4">Non Tech Coder</h3>
            <p className="text-primary-foreground/80">
              Master interviews with AI-powered feedback and improve your skills to land your dream job.
            </p>
            <div className="flex space-x-4 mt-6">
              <motion.a
                href="#"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </motion.a>
              <motion.a
                href="#"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </motion.a>
              <motion.a
                href="#"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </motion.a>
              <motion.a
                href="#"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                href="#"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h4 className="text-md font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "How It Works", "Pricing", "FAQ", "Blog"].map((item, index) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h4 className="text-md font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Refund Policy"].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h4 className="text-md font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">support@notechinterviewer.com</li>
              <li className="text-primary-foreground/80">+91 98765 43210</li>
              <li className="text-primary-foreground/80 mt-4">
                123 Tech Park, Koramangala
                <br />
                Bangalore, Karnataka 560034
                <br />
                India
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p>&copy; {new Date().getFullYear()} Non Tech Coder. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
