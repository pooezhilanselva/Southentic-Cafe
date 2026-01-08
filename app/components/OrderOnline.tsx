"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { restaurantInfo } from "@/app/data/restaurant";

export default function OrderOnline() {
  const { swiggy, zomato } = restaurantInfo.deliveryPlatforms;
  return (
    <section id="order" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-cafe-text mb-4">
            Order Online
          </h2>
          <p className="text-xl text-cafe-text/70 mb-2">
            Get your favorite dosas delivered to your doorstep
          </p>
          <p className="text-sm text-cafe-text/60">
            Available for delivery & takeaway
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Swiggy Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="p-8 h-full flex flex-col items-center justify-center text-center space-y-6 border-2 border-orange-500/20 hover:border-orange-500/40 transition-all">
              <div className="w-24 h-24 relative flex items-center justify-center">
                <Image
                  src={swiggy.logo}
                  alt={`${swiggy.name} Logo`}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-cafe-text mb-2">
                  Order on {swiggy.name}
                </h3>
                <p className="text-cafe-text/60">
                  Fast delivery from your favorite aggregator
                </p>
              </div>

              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white w-full"
                asChild
              >
                <a
                  href={swiggy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Order Now
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </Card>
          </motion.div>

          {/* Zomato Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="p-8 h-full flex flex-col items-center justify-center text-center space-y-6 border-2 border-red-500/20 hover:border-red-500/40 transition-all">
              <div className="w-24 h-24 relative flex items-center justify-center">
                <Image
                  src={zomato.logo}
                  alt={`${zomato.name} Logo`}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-cafe-text mb-2">
                  Order on {zomato.name}
                </h3>
                <p className="text-cafe-text/60">
                  Quick and reliable food delivery
                </p>
              </div>

              <Button
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white w-full"
                asChild
              >
                <a
                  href={zomato.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Order Now
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </Card>
          </motion.div>
        </div>

        {/* Delivery Scooter Background Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.35 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="scooter-delivery-container"
        >
          {/* @ts-expect-error - lord-icon is a custom web component */}
          <lord-icon
            src="https://cdn.lordicon.com/tkjuknug.json"
            trigger="loop"
            colors="primary:#D4A574,secondary:#8B7355"
            style={{
              width: '280px',
              height: '280px'
            }}
          >
            {/* @ts-expect-error - lord-icon closing tag */}
          </lord-icon>
        </motion.div>
      </div>
    </section>
  );
}
