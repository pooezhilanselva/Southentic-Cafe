"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function PopularMenu() {
  return (
    <section id="menu" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-cafe-text mb-4">
            Popular Favorites
          </h2>
          <p className="text-xl text-cafe-text/70">
            Our most loved dosas, made fresh to order
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {popularItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
            >
              <Card className="p-6 h-full flex flex-col items-center justify-center text-center space-y-4 border-cafe-accent/20 hover:border-cafe-accent/40 transition-colors">
                {/* Minimal dosa illustration */}
                <div className="w-20 h-20 rounded-full bg-cafe-accent/10 flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-12 h-12 text-cafe-accent"
                    fill="currentColor"
                  >
                    <ellipse cx="50" cy="50" rx="40" ry="25" opacity="0.6" />
                    <ellipse cx="50" cy="48" rx="35" ry="20" opacity="0.8" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cafe-text mb-1">
                    {item.name}
                  </h3>
                  <p className="text-2xl font-bold text-cafe-accent">
                    ₹{item.price}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
