"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { restaurantInfo } from "@/app/data/restaurant";

export default function Location() {
  const { address, phone, googleMapsUrl } = restaurantInfo;
  const googleMapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <section className="py-24 px-6 bg-cafe-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-cafe-text mb-4">
            Visit Us
          </h2>
          <p className="text-xl text-cafe-text/70">
            We&apos;re located in the heart of Electronic City
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cafe-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-cafe-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cafe-text mb-2">
                    Address
                  </h3>
                  <p className="text-cafe-text/70 leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cafe-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-cafe-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cafe-text mb-2">
                    Phone
                  </h3>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="text-cafe-accent hover:text-cafe-accent-dark text-lg font-medium transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-cafe-accent hover:bg-cafe-accent-dark text-white"
                asChild
              >
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Navigation className="h-5 w-5" />
                  Get Directions
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-cafe-accent text-cafe-accent hover:bg-cafe-accent/10"
                asChild
              >
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right: Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-lg overflow-hidden shadow-lg h-[400px] md:h-[500px]"
          >
            <iframe
              src={googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Southentic Cafe Location"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
