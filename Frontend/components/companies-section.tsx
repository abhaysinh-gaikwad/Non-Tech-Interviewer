"use client"

import { motion } from "framer-motion"

export function CompaniesSection() {
  // These would normally be actual SVG logos of companies
  const companies = [
    { id: 1, name: "Google" },
    { id: 2, name: "Microsoft" },
    { id: 3, name: "Amazon" },
    { id: 4, name: "Facebook" },
    { id: 5, name: "Apple" },
    { id: 6, name: "Netflix" },
    { id: 7, name: "Uber" },
    { id: 8, name: "Airbnb" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Trusted by Top Companies</h2>
          <p className="text-muted-foreground">Our candidates get hired at leading tech companies worldwide</p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              className="flex items-center justify-center h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <div className="bg-gray-200 rounded-md px-6 py-2 font-bold text-primary">{company.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
