"use client";

import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-cafe-bg">
      {/* Centered Text Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-7xl font-bold tracking-tight text-cafe-text"
          >
            Southentic Cafe
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-cafe-text/80 leading-relaxed"
          >
            Authentic South Indian breakfast & Chinese cuisine, made fresh daily.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 text-cafe-text/70 justify-center"
          >
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-cafe-accent" />
              <span className="text-sm">Electronic City, Bengaluru</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-cafe-accent" />
              <span className="text-sm">Cafe Timings: 7:30 AM – 11:00 PM</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("menu")}
              className="bg-cafe-accent hover:bg-cafe-accent-dark text-white px-8 py-6 text-lg"
            >
              View Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("order")}
              className="border-cafe-accent text-cafe-accent hover:bg-cafe-accent/10 px-8 py-6 text-lg"
            >
              Order Online
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
