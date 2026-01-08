"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 px-6 bg-cafe-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: Heading shown first */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold tracking-tight text-cafe-text mb-12 text-center lg:hidden"
        >
          Rooted in Tradition. Served with Care.
        </motion.h2>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 lg:pr-8"
          >
            {/* Desktop: Heading */}
            <h2 className="hidden lg:block text-5xl md:text-6xl font-bold tracking-tight text-cafe-text leading-tight">
              Rooted in Tradition. Served with Care.
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl text-cafe-text/70 leading-relaxed">
              At Southentic Cafe, we serve authentic South Indian breakfasts and flavorful Chinese cuisine, made with fresh ingredients and traditional recipes.
            </p>

            {/* Additional detail */}
            <p className="text-lg text-cafe-text/60 leading-relaxed">
              Every cup of coffee and every dish is crafted with care, honoring the time-tested methods that bring out the best flavors.
            </p>
          </motion.div>

          {/* Right: Coffee Machine Animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-cafe-accent/5 rounded-full blur-3xl scale-110" />

              {/* Coffee Machine */}
              <div className="relative coffee-machine-container">
                {/* @ts-expect-error - lord-icon is a custom web component */}
                <lord-icon
                  src="https://cdn.lordicon.com/xlsnmber.json"
                  trigger="loop"
                  colors="primary:#7B4A2E,secondary:#5D3622"
                  style={{
                    width: '280px',
                    height: '280px'
                  }}
                >
                  {/* @ts-expect-error - lord-icon closing tag */}
                </lord-icon>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
